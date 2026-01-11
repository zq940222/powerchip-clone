# 下一步操作指南

## 当前状态

已完成的核心工作:
- ✅ 导航菜单结构完全匹配原网站
- ✅ 创建了About子页面 (Milestone, Quality System)
- ✅ 创建了Services子页面 (Overhaul, Memory Testing)
- ✅ 创建了Career/Culture页面
- ✅ 创建了必要的目录结构

## 需要完成的剩余页面

### 1. Career 子页面 (简单复制culture页面并修改内容)

#### Training & Development 页面
```bash
# 文件路径
src/app/[locale]/career/training/page.tsx
```

页面应包含:
- 培训计划介绍
- 职业发展路径
- 学习资源
- 导师制度

#### Diverse Welfare 页面
```bash
# 文件路径
src/app/[locale]/career/welfare/page.tsx
```

页面应包含:
- 薪资福利
- 保险制度
- 员工优惠
- 休假政策

### 2. Investors 子页面

#### Stock Information 页面
```bash
# 文件路径
src/app/[locale]/investors/stock/page.tsx
```

页面应包含:
- 股价信息
- 股东信息
- 股利政策
- 投资人日历

#### Contact 页面
```bash
# 文件路径
src/app/[locale]/investors/contact/page.tsx
```

页面应包含:
- 投资人关系联系方式
- 常见问题
- 联系表单

### 3. Insights 页面

#### Press Releases 页面
```bash
# 文件路径
src/app/[locale]/insights/press/page.tsx
```

页面应包含:
- 新闻稿列表
- 搜索筛选功能
- 分页

#### Events & Highlights 页面
```bash
# 文件路径
src/app/[locale]/insights/events/page.tsx
```

页面应包含:
- 活动列表
- 精彩瞬间图片
- 活动日历

## 快速生成页面的方法

### 方案1: 复制已有页面模板

以culture页面为模板,快速创建其他页面:

```bash
# 复制culture页面作为模板
cp src/app/[locale]/career/culture/page.tsx src/app/[locale]/career/training/page.tsx
cp src/app/[locale]/career/culture/page.tsx src/app/[locale]/career/welfare/page.tsx

# 然后编辑每个文件,修改标题和内容
```

### 方案2: 使用统一的页面组件

创建一个通用的页面组件,传入不同的配置:

```tsx
// src/components/pages/GenericPage.tsx
export default function GenericPage({
  title,
  description,
  sections
}: GenericPageProps) {
  // 通用页面布局
}
```

## 路由迁移计划

需要将旧路由迁移到新路由:

### 目录重命名
```bash
# 方法1: 创建新目录,保留旧目录(推荐)
# 已经创建了新目录,旧目录可以保留作为向后兼容

# 方法2: 删除旧目录(需要确保没有其他引用)
# rm -rf src/app/[locale]/technology
# rm -rf src/app/[locale]/investor
# rm -rf src/app/[locale]/news
```

### 更新首页链接

编辑 `src/app/[locale]/page.tsx`:

```tsx
// 将所有旧路径更新为新路径
/technology → /services
/investor → /investors
/news → /insights
```

搜索并替换:
```bash
# 在page.tsx中查找所有链接
- /${locale}/technology → /${locale}/services
- /${locale}/investor → /${locale}/investors
- /${locale}/news → /${locale}/insights
```

## 页面内容参考原网站

访问原网站对应页面获取内容:

1. **Career - Culture & Life**
   https://www.powerchip.com/en-global/staticpage/culture-and-life

2. **Career - Training**
   https://www.powerchip.com/en-global/staticpage/training-and-development

3. **Career - Welfare**
   https://www.powerchip.com/en-global/staticpage/diverse-welfare

4. **Investors - Stock**
   https://www.powerchip.com/en-global/stock/index/shareholders-2025

5. **Investors - Contact**
   https://www.powerchip.com/en-global/staticpage/ir_contact

6. **Insights - Press**
   https://www.powerchip.com/en-global/insights/press-releases

7. **Insights - Events**
   https://www.powerchip.com/en-global/insights/event-hightlight

## 页面模板参考

所有页面都应包含以下结构:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function PageName({ params: { locale } }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - 页面标题 */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy...">
        {/* Hero内容 */}
      </section>

      {/* 2. Main Content - 主要内容 */}
      <section className="py-24">
        {/* 内容区域 */}
      </section>

      {/* 3. Features/Details - 特色/详情 */}
      <section className="py-24 bg-psmc-gray">
        {/* 特色内容 */}
      </section>

      {/* 4. CTA - 行动号召 */}
      <section className="py-24 bg-psmc-navy">
        {/* CTA按钮 */}
      </section>
    </div>
  )
}
```

## 测试检查清单

创建完所有页面后,检查:

- [ ] 所有导航链接能正常访问
- [ ] 中英文切换正常工作
- [ ] 移动端显示正常
- [ ] 所有外部链接在新标签页打开
- [ ] 图片和图标正常显示
- [ ] 动画效果流畅
- [ ] 页面加载速度快
- [ ] SEO元数据正确

## 优化建议

1. **图片优化**: 使用Next.js Image组件
2. **代码分割**: 确保页面按需加载
3. **性能优化**: 使用React.memo优化重渲染
4. **SEO优化**: 添加metadata和结构化数据
5. **无障碍**: 添加ARIA标签和键盘导航

## 部署前检查

- [ ] 运行 `npm run build` 确保无错误
- [ ] 检查所有环境变量
- [ ] 测试所有页面路由
- [ ] 检查浏览器控制台无错误
- [ ] 测试不同设备和浏览器
