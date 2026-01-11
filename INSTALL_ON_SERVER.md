# 🚀 服务器安装指南（Node.js 16.20.2）

## ⚠️ 重要：必须按顺序执行

由于服务器只支持 Node.js 16.20.2，必须严格按照以下步骤安装。

---

## 第一步：SSH 连接到服务器

```bash
ssh root@your-server-ip
```

或在宝塔面板使用 **终端** 功能。

---

## 第二步：验证 Node.js 版本

```bash
node -v
# 必须显示: v16.20.2

npm -v
# 应显示: 8.x.x
```

如果版本不对：

```bash
# 在宝塔面板 → 软件商店 → PM2管理器 → 版本管理
# 安装并切换到 v16.20.2
```

---

## 第三步：克隆项目

```bash
# 进入网站根目录
cd /www/wwwroot/

# 克隆项目（如果还没有）
git clone https://github.com/zq940222/powerchip-clone.git

# 进入项目目录
cd powerchip-clone

# 拉取最新代码
git pull origin main
```

---

## 第四步：删除旧的依赖（重要！）

```bash
# 删除可能存在的旧依赖和锁文件
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
```

---

## 第五步：安装依赖（关键步骤）

### 方法 A：使用 npm（推荐）

```bash
# 使用 npm 安装精确版本
npm install

# 如果报错，使用 --legacy-peer-deps
npm install --legacy-peer-deps
```

### 方法 B：使用淘宝镜像（国内服务器推荐）

```bash
# 使用淘宝镜像安装
npm install --registry=https://registry.npmmirror.com

# 或者安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install
```

### 验证安装结果

```bash
# 检查 Next.js 版本（必须是 14.0.4）
npm list next
# 应显示: next@14.0.4

# 检查 node_modules 是否存在
ls -la node_modules/next/dist/bin/next
# 应该能看到这个文件
```

---

## 第六步：配置环境变量

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑环境变量
nano .env
```

修改为实际配置：

```env
# Database
DATABASE_URL="mysql://tslimc_com:cEQH4ZbYc5KixpfJ@localhost:3306/tslimc_com"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="https://yourdomain.com"

# Site
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

**生成 NEXTAUTH_SECRET：**

```bash
openssl rand -base64 32
```

保存文件（Ctrl+O, Enter, Ctrl+X）

---

## 第七步：初始化数据库（如果使用）

```bash
# 生成 Prisma 客户端
npm run db:generate

# 推送数据库结构
npm run db:push

# 如果需要种子数据（可选）
# npm run db:seed
```

---

## 第八步：构建项目

```bash
# 构建生产版本
npm run build

# 如果构建时内存不足，增加内存限制
NODE_OPTIONS='--max-old-space-size=2048' npm run build
```

### 验证构建结果

```bash
# 检查 .next 文件夹
ls -la .next/
# 应该能看到 BUILD_ID, server, static 等文件夹

# 查看构建 ID
cat .next/BUILD_ID
```

---

## 第九步：启动项目

### 方法 A：使用 ecosystem.config.js（推荐）

```bash
# 创建日志目录
mkdir -p logs

# 使用 PM2 启动
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup

# 查看状态
pm2 list
```

### 方法 B：直接使用 npm

```bash
# 使用 PM2 启动 npm
pm2 start npm --name "powerchip-clone" -- start

# 保存配置
pm2 save
```

### 方法 C：测试运行（调试用）

```bash
# 直接运行（不用 PM2）
npm run start

# 看到以下输出说明成功：
# ready - started server on 0.0.0.0:3000
# 按 Ctrl+C 停止
```

---

## 第十步：验证运行

```bash
# 1. 查看 PM2 状态
pm2 list
# 状态应该是: online

# 2. 查看日志
pm2 logs powerchip-clone --lines 50

# 3. 查看端口
netstat -tlnp | grep 3000
# 应该显示: tcp ... 0.0.0.0:3000 ... LISTEN

# 4. 测试访问
curl http://127.0.0.1:3000
# 应该返回 HTML 内容

# 5. 查看详细信息
pm2 show powerchip-clone
```

---

## 第十一步：配置 Nginx 反向代理（在宝塔面板）

### 1. 添加网站

**网站** → **添加站点**

```
域名: yourdomain.com
根目录: /www/wwwroot/powerchip-clone（随便选）
PHP版本: 纯静态
```

### 2. 配置反向代理

点击站点 → **设置** → **反向代理** → **添加反向代理**

```
代理名称: powerchip
目标URL: http://127.0.0.1:3000
发送域名: $host
```

### 3. 自定义 Nginx 配置

在反向代理设置中，点击 **配置文件**，确保有以下内容：

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

# Next.js 静态文件缓存
location /_next/static {
    proxy_pass http://127.0.0.1:3000/_next/static;
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

### 4. 配置 SSL

**设置** → **SSL** → **Let's Encrypt**

- 输入邮箱
- 选择域名
- 点击 **申请**
- 开启 **强制 HTTPS**

---

## ✅ 安装完成检查清单

确认以下所有项目：

- [ ] Node.js 版本是 v16.20.2
- [ ] npm install 成功，无错误
- [ ] next@14.0.4 已安装（不是 14.2+）
- [ ] npm run build 成功生成 .next 文件夹
- [ ] .env 文件已配置
- [ ] Prisma 客户端已生成（如使用数据库）
- [ ] PM2 进程状态为 online
- [ ] curl http://127.0.0.1:3000 返回 HTML
- [ ] Nginx 反向代理已配置
- [ ] 域名可以正常访问
- [ ] SSL 证书已配置
- [ ] pm2 save 已执行
- [ ] pm2 startup 已设置

---

## 🔧 常见错误解决

### 错误 1: next: command not found

**原因**: 依赖没有安装

**解决**:
```bash
cd /www/wwwroot/powerchip-clone
npm install
```

### 错误 2: The engine "node" is incompatible

**错误信息**:
```
error next@14.2.35: The engine "node" is incompatible with this module.
Expected version ">=18.17.0". Got "16.20.2"
```

**原因**: 安装了错误的 Next.js 版本

**解决**:
```bash
# 删除依赖
rm -rf node_modules package-lock.json

# 重新安装（会安装精确版本）
npm install

# 验证版本
npm list next
# 应显示: next@14.0.4
```

### 错误 3: Cannot find module '.next/BUILD_ID'

**原因**: 项目没有构建

**解决**:
```bash
npm run build
```

### 错误 4: EADDRINUSE: address already in use :::3000

**原因**: 端口被占用

**解决**:
```bash
# 查看占用进程
lsof -i :3000

# 杀死进程
kill -9 <PID>

# 或停止 PM2 进程
pm2 stop powerchip-clone
pm2 delete powerchip-clone
```

### 错误 5: Prisma Client 未生成

**错误信息**:
```
Error: @prisma/client did not initialize yet
```

**解决**:
```bash
npm run db:generate
npm run db:push
```

### 错误 6: 权限不足

**错误信息**:
```
EACCES: permission denied
```

**解决**:
```bash
# 修改权限
chown -R www:www /www/wwwroot/powerchip-clone
chmod -R 755 /www/wwwroot/powerchip-clone

# 如果 npm 报错
chown -R $(whoami) ~/.npm
```

---

## 🔄 更新部署流程

当需要更新代码时：

```bash
# 1. 进入项目目录
cd /www/wwwroot/powerchip-clone

# 2. 拉取最新代码
git pull origin main

# 3. 重新安装依赖（如果 package.json 有变化）
npm install

# 4. 重新构建
npm run build

# 5. 重启服务
pm2 restart powerchip-clone

# 6. 查看日志确认
pm2 logs powerchip-clone --lines 50
```

---

## 📊 性能优化（可选）

### 1. 使用 PM2 集群模式

如果服务器有多核 CPU：

```bash
# 停止当前进程
pm2 stop powerchip-clone

# 使用集群模式启动（2 个实例）
pm2 start npm --name "powerchip-clone" -i 2 -- start

# 或使用所有 CPU 核心
pm2 start npm --name "powerchip-clone" -i max -- start
```

### 2. 监控资源使用

```bash
# 实时监控
pm2 monit

# 查看资源使用
pm2 show powerchip-clone
```

---

## 📞 需要帮助？

### 查看日志

```bash
# PM2 日志
pm2 logs powerchip-clone

# Nginx 错误日志
tail -f /www/wwwroot/powerchip-clone/logs/err.log

# 系统日志
journalctl -u pm2-root -f
```

### 常用调试命令

```bash
# 重启服务
pm2 restart powerchip-clone

# 停止服务
pm2 stop powerchip-clone

# 删除进程
pm2 delete powerchip-clone

# 清理日志
pm2 flush

# 重新加载（零停机）
pm2 reload powerchip-clone
```

---

## 🎯 一键安装脚本

**完整的安装命令（复制粘贴执行）：**

```bash
# 设置变量
PROJECT_DIR="/www/wwwroot/powerchip-clone"

# 进入目录
cd $PROJECT_DIR

# 清理旧依赖
rm -rf node_modules package-lock.json yarn.lock

# 拉取最新代码
git pull origin main

# 安装依赖
npm install --legacy-peer-deps

# 验证 Next.js 版本
npm list next

# 构建项目
NODE_OPTIONS='--max-old-space-size=2048' npm run build

# 生成 Prisma 客户端（如果使用数据库）
npm run db:generate

# 创建日志目录
mkdir -p logs

# 停止旧进程（如果存在）
pm2 stop powerchip-clone 2>/dev/null || true
pm2 delete powerchip-clone 2>/dev/null || true

# 启动新进程
pm2 start ecosystem.config.js

# 保存配置
pm2 save

# 查看状态
pm2 list

# 查看日志
pm2 logs powerchip-clone --lines 30
```

---

## ✅ 完成！

如果所有步骤都成功，你应该能够：

1. 通过 `http://服务器IP:3000` 访问网站
2. 通过域名访问网站（配置了 Nginx 后）
3. 看到 PM2 进程状态为 `online`
4. 日志中没有错误信息

祝部署顺利！🚀
