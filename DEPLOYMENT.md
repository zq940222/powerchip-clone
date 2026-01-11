# 宝塔部署指南 - Node.js 16.20.2

本项目已配置为兼容 Node.js 16.20.2 版本。

## 📋 更新内容

### 1. package.json 修改

- ✅ 添加了 `engines` 字段，限制 Node.js 版本为 16.20.x
- ✅ 降低了 `framer-motion` 版本从 ^12.25.0 到 ^10.18.0（兼容 Node 16）
- ✅ 在 start 命令中指定端口 `-p 3000`

### 2. 版本兼容性确认

所有依赖都已确认兼容 Node.js 16.20.2：

| 依赖包 | 版本 | Node 16 兼容性 |
|--------|------|---------------|
| Next.js | 14.0.4 | ✅ 支持 |
| React | 18.2.0 | ✅ 支持 |
| Prisma | 5.7.1 | ✅ 支持 |
| TypeScript | 5.3.3 | ✅ 支持 |
| Tailwind CSS | 3.4.0 | ✅ 支持 |
| framer-motion | 10.18.0 | ✅ 支持 |

---

## 🚀 宝塔部署步骤

### 第一步：准备本地环境（可选）

如果要在本地测试 Node 16 兼容性：

```bash
# 使用 nvm 切换到 Node 16
nvm install 16.20.2
nvm use 16.20.2

# 验证版本
node -v  # 应显示 v16.20.2

# 清理并重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 构建测试
npm run build
```

### 第二步：打包项目

```bash
# 方案 A: 在本地构建后上传（推荐，节省服务器资源）
npm run build

# 打包所有必要文件
tar -czf powerchip-deploy.tar.gz \
  .next \
  public \
  src \
  prisma \
  package.json \
  package-lock.json \
  next.config.js \
  tsconfig.json \
  tailwind.config.js \
  postcss.config.js

# 方案 B: 上传源码，在服务器构建
tar -czf powerchip-source.tar.gz \
  public \
  src \
  prisma \
  package.json \
  package-lock.json \
  next.config.js \
  tsconfig.json \
  tailwind.config.js \
  postcss.config.js
```

### 第三步：上传到宝塔服务器

1. 登录宝塔面板
2. **文件管理** → 进入 `/www/wwwroot/`
3. 上传 `powerchip-deploy.tar.gz` 或 `powerchip-source.tar.gz`
4. 右键解压

或使用命令行：

```bash
# 通过 SCP 上传
scp powerchip-deploy.tar.gz root@your-server-ip:/www/wwwroot/

# SSH 登录服务器
ssh root@your-server-ip

# 解压
cd /www/wwwroot/
tar -xzf powerchip-deploy.tar.gz -C powerchip-clone/
```

### 第四步：在服务器上配置

SSH 连接到服务器或使用宝塔终端：

```bash
# 进入项目目录
cd /www/wwwroot/powerchip-clone

# 验证 Node 版本
node -v
# 必须显示 v16.20.2

# 如果上传的是源码，需要安装依赖并构建
npm install --production
npm run build

# 如果上传的是构建后的文件，只需要安装生产依赖
npm install --production --ignore-scripts

# 生成 Prisma 客户端（如果使用数据库）
npm run db:generate
```

### 第五步：配置环境变量

创建 `.env` 文件：

```bash
# 使用宝塔文件管理器创建，或命令行
nano /www/wwwroot/powerchip-clone/.env
```

添加以下内容：

```env
# 环境配置
NODE_ENV=production
PORT=3000

# 数据库配置（如果使用）
DATABASE_URL="postgresql://user:password@localhost:5432/powerchip?schema=public"

# NextAuth 配置（如果使用）
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production"
NEXTAUTH_URL="https://yourdomain.com"

# 其他配置
```

**生成安全的 NEXTAUTH_SECRET：**

```bash
openssl rand -base64 32
```

### 第六步：在宝塔创建 Node 项目

**软件商店** → **PM2 管理器** → **Node 项目** → **添加 Node 项目**

#### 配置参数：

```
项目名称: powerchip-clone

Node版本: v16.20.2 ✓ （必须选择这个版本）

启动文件: [留空]

运行目录: /www/wwwroot/powerchip-clone
         [点击浏览按钮选择]

包管理器: npm

负载实例数: 1
         （服务器性能好可以设置 2-4）

内存上限: 1024 MB
         （根据服务器内存调整，建议 512-2048）

□ 不安装 node_module
  （不要勾选！需要安装依赖）

自动重载: ✓ 开启
```

#### 点击"更多配置 ▼"：

```
启动命令/脚本名称: start

环境变量:
NODE_ENV=production
PORT=3000
```

点击 **确定** 创建项目。

### 第七步：启动项目

在 PM2 管理器中找到 `powerchip-clone` 项目，点击 **启动**。

或使用命令行：

```bash
# 方法 1: 使用 npm
pm2 start npm --name "powerchip-clone" -- start

# 方法 2: 直接启动
pm2 start "npm run start" --name powerchip-clone

# 方法 3: 使用配置文件
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

### 第八步：配置反向代理

**网站** → **添加站点**：

```
域名: yourdomain.com
根目录: /www/wwwroot/powerchip-clone（随便选）
PHP版本: 纯静态
```

点击站点 → **设置** → **反向代理** → **添加反向代理**：

```
代理名称: powerchip
目标URL: http://127.0.0.1:3000
发送域名: $host
```

Nginx 配置：

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}

# Next.js 静态资源缓存
location /_next/static {
    proxy_pass http://127.0.0.1:3000/_next/static;
    proxy_cache_valid 200 60m;
    add_header Cache-Control "public, max-age=3600, immutable";
}

# 图片资源缓存
location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
    proxy_pass http://127.0.0.1:3000;
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

### 第九步：配置 SSL（可选但推荐）

**设置** → **SSL** → **Let's Encrypt**：

1. 输入邮箱
2. 选择域名
3. 点击 **申请**
4. 等待签发完成
5. 开启 **强制 HTTPS**

---

## ✅ 验证部署

### 1. 检查进程状态

```bash
# 查看 PM2 进程
pm2 list

# 查看日志
pm2 logs powerchip-clone

# 实时监控
pm2 monit
```

应该看到：

```
┌─────┬──────────────────┬─────────┬─────────┬──────────┐
│ id  │ name             │ status  │ cpu     │ memory   │
├─────┼──────────────────┼─────────┼─────────┼──────────┤
│ 0   │ powerchip-clone  │ online  │ 0.5%    │ 150.0 MB │
└─────┴──────────────────┴─────────┴─────────┴──────────┘
```

### 2. 检查端口

```bash
# 确认 3000 端口已监听
netstat -tlnp | grep 3000

# 或
ss -tlnp | grep 3000
```

应该看到：

```
tcp   0   0   127.0.0.1:3000   0.0.0.0:*   LISTEN   12345/node
```

### 3. 测试访问

```bash
# 本地测试
curl http://127.0.0.1:3000

# 应该返回 HTML 内容
```

### 4. 浏览器访问

- 直接访问：`http://服务器IP:3000`
- 域名访问：`https://yourdomain.com`

---

## 🔧 常见问题处理

### 问题 1: Node 版本不匹配

**错误信息：**
```
error: The engine "node" is incompatible with this module.
```

**解决方案：**
```bash
# 在宝塔 PM2 管理器中切换到 v16.20.2
# 或使用命令
nvm use 16.20.2
# 或
n 16.20.2
```

### 问题 2: npm install 失败

**错误信息：**
```
npm ERR! code ENOENT
npm ERR! syscall open
```

**解决方案：**
```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules
rm -rf node_modules package-lock.json

# 使用 Node 16 的 npm
npm install --legacy-peer-deps
```

### 问题 3: 构建失败

**错误信息：**
```
Error: Cannot find module '.next/BUILD_ID'
```

**解决方案：**
```bash
# 确保 .next 文件夹存在
ls -la .next/

# 重新构建
rm -rf .next
npm run build
```

### 问题 4: Prisma 客户端未生成

**错误信息：**
```
Error: @prisma/client did not initialize yet
```

**解决方案：**
```bash
# 生成 Prisma 客户端
npx prisma generate

# 推送数据库结构
npx prisma db push

# 如果需要，运行种子数据
npm run db:seed
```

### 问题 5: 端口被占用

**错误信息：**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**解决方案：**
```bash
# 查看占用进程
lsof -i :3000

# 杀死进程
kill -9 <PID>

# 或修改端口
# 编辑 .env
PORT=3001

# 或在 package.json 中修改
"start": "next start -p 3001"
```

### 问题 6: 内存不足

**错误信息：**
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**解决方案：**
```bash
# 增加 Node.js 内存限制
pm2 start npm --name "powerchip-clone" --max-memory-restart 2G -- start

# 或在 package.json 中
"start": "NODE_OPTIONS='--max-old-space-size=2048' next start"
```

---

## 📊 性能优化建议

### 1. 使用 PM2 集群模式

如果服务器 CPU 核心数 ≥ 2：

```bash
# 停止当前进程
pm2 stop powerchip-clone

# 使用集群模式启动
pm2 start npm --name "powerchip-clone" -i 2 -- start

# -i 2 表示 2 个实例，可以设置为 CPU 核心数
# -i max 表示使用所有核心
```

### 2. 启用 Nginx 缓存

在宝塔 Nginx 配置中添加：

```nginx
# 设置缓存路径
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=nextjs_cache:10m max_size=1g inactive=60m;

location / {
    proxy_cache nextjs_cache;
    proxy_cache_valid 200 60m;
    proxy_cache_key "$scheme$request_method$host$request_uri";
    add_header X-Cache-Status $upstream_cache_status;

    proxy_pass http://127.0.0.1:3000;
}
```

### 3. 开启 Gzip 压缩

在宝塔站点设置中：
- **性能优化** → **Gzip 压缩** → 开启

### 4. 配置 CDN

如果有 CDN：
- 将静态资源 `/_next/static/` 指向 CDN
- 配置 `next.config.js` 的 `assetPrefix`

---

## 🔄 更新部署流程

当需要更新代码时：

```bash
# 1. 本地构建新版本
npm run build
tar -czf powerchip-update.tar.gz .next

# 2. 上传到服务器
scp powerchip-update.tar.gz root@server:/www/wwwroot/powerchip-clone/

# 3. SSH 到服务器
ssh root@server

# 4. 解压并重启
cd /www/wwwroot/powerchip-clone
tar -xzf powerchip-update.tar.gz
pm2 restart powerchip-clone

# 5. 查看日志确认
pm2 logs powerchip-clone
```

---

## 📝 PM2 生态系统配置文件（可选）

创建 `ecosystem.config.js`：

```javascript
module.exports = {
  apps: [{
    name: 'powerchip-clone',
    script: 'npm',
    args: 'start',
    cwd: '/www/wwwroot/powerchip-clone',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
};
```

使用：
```bash
pm2 start ecosystem.config.js
pm2 save
```

---

## ✅ 部署检查清单

部署完成后，确认以下项目：

- [ ] Node.js 版本是 16.20.2
- [ ] npm install 成功，无错误
- [ ] npm run build 成功生成 .next 文件夹
- [ ] 环境变量 .env 已配置
- [ ] Prisma 客户端已生成（如使用数据库）
- [ ] PM2 进程状态为 online
- [ ] 端口 3000 正常监听
- [ ] curl http://127.0.0.1:3000 返回 HTML
- [ ] Nginx 反向代理已配置
- [ ] 域名可以正常访问
- [ ] SSL 证书已配置（HTTPS）
- [ ] PM2 已保存配置（pm2 save）
- [ ] 开机自启已设置（pm2 startup）

---

## 📞 技术支持

如遇到问题，请检查：

1. **PM2 日志**：`pm2 logs powerchip-clone`
2. **Nginx 日志**：`/www/wwwroot/powerchip-clone/logs/`
3. **宝塔系统日志**：软件商店 → PM2 管理器 → 日志

常用调试命令：

```bash
# 查看进程详情
pm2 show powerchip-clone

# 重启进程
pm2 restart powerchip-clone

# 查看实时日志
pm2 logs powerchip-clone --lines 100

# 清理日志
pm2 flush

# 监控资源
pm2 monit
```
