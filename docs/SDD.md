# Software Design Document (SDD)
# PSMC 力積電官網複刻專案

## 1. 專案概述

### 1.1 專案名稱
PSMC Website Clone - 力積電官網複刻系統

### 1.2 專案目標
複刻 powerchip.com 網站，實現企業官網的核心功能，包含：
- 響應式設計，適配手機端
- 中文繁體與英文雙語支援
- 後台新聞管理系統

### 1.3 技術棧

| 類別 | 技術選型 | 說明 |
|------|----------|------|
| 前端框架 | Next.js 14 (App Router) | React 框架，支援 SSR/SSG |
| 開發語言 | TypeScript | 類型安全 |
| 樣式框架 | Tailwind CSS | 響應式設計 |
| 資料庫 | MySQL 8.0 | 關聯式資料庫 |
| ORM | Prisma | TypeScript ORM |
| 國際化 | next-intl | 多語言支援 |
| 認證 | NextAuth.js | 後台認證 |
| 編輯器 | TipTap / React-Quill | 富文本編輯 |

---

## 2. 系統架構

### 2.1 整體架構圖

```
┌─────────────────────────────────────────────────────────────┐
│                        Client                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   Desktop   │  │   Tablet    │  │   Mobile    │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Next.js Application                      │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   App Router                         │    │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐        │    │
│  │  │  /zh-TW   │  │   /en     │  │  /admin   │        │    │
│  │  │  中文頁面  │  │  英文頁面  │  │  後台管理  │        │    │
│  │  └───────────┘  └───────────┘  └───────────┘        │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   API Routes                         │    │
│  │  /api/news  /api/auth  /api/pages  /api/upload      │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Prisma ORM                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      MySQL Database                          │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 目錄結構

```
powerchip-clone/
├── docs/                      # 文檔
│   └── SDD.md
├── prisma/                    # Prisma 配置
│   └── schema.prisma
├── public/                    # 靜態資源
│   └── images/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── [locale]/          # 國際化路由
│   │   │   ├── page.tsx       # 首頁
│   │   │   ├── about/         # 關於我們
│   │   │   ├── technology/    # 技術與服務
│   │   │   ├── investor/      # 投資人專區
│   │   │   ├── news/          # 新聞中心
│   │   │   └── contact/       # 聯繫我們
│   │   ├── admin/             # 後台管理
│   │   │   ├── page.tsx
│   │   │   ├── news/
│   │   │   └── login/
│   │   ├── api/               # API 路由
│   │   │   ├── auth/
│   │   │   ├── news/
│   │   │   └── upload/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/            # 組件
│   │   ├── layout/            # 佈局組件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/                # UI 組件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── sections/          # 頁面區塊
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       └── NewsSection.tsx
│   ├── lib/                   # 工具函數
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   ├── locales/               # 語言檔案
│   │   ├── zh-TW.json
│   │   └── en.json
│   └── types/                 # TypeScript 類型
│       └── index.ts
├── .env                       # 環境變數
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. 資料庫設計

### 3.1 ER 圖

```
┌──────────────────┐       ┌──────────────────┐
│      User        │       │    NewsCategory  │
├──────────────────┤       ├──────────────────┤
│ id: Int (PK)     │       │ id: Int (PK)     │
│ email: String    │       │ name_zh: String  │
│ password: String │       │ name_en: String  │
│ name: String     │       │ slug: String     │
│ role: Enum       │       │ createdAt: Date  │
│ createdAt: Date  │       └────────┬─────────┘
│ updatedAt: Date  │                │
└────────┬─────────┘                │
         │                          │
         │ 1:N                      │ 1:N
         ▼                          ▼
┌──────────────────────────────────────────────┐
│                    News                       │
├──────────────────────────────────────────────┤
│ id: Int (PK)                                 │
│ title_zh: String                             │
│ title_en: String                             │
│ content_zh: Text                             │
│ content_en: Text                             │
│ excerpt_zh: String                           │
│ excerpt_en: String                           │
│ coverImage: String                           │
│ published: Boolean                           │
│ publishedAt: DateTime                        │
│ categoryId: Int (FK)                         │
│ authorId: Int (FK)                           │
│ createdAt: DateTime                          │
│ updatedAt: DateTime                          │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                  PageContent                  │
├──────────────────────────────────────────────┤
│ id: Int (PK)                                 │
│ pageKey: String (unique)                     │
│ title_zh: String                             │
│ title_en: String                             │
│ content_zh: Text                             │
│ content_en: Text                             │
│ createdAt: DateTime                          │
│ updatedAt: DateTime                          │
└──────────────────────────────────────────────┘
```

### 3.2 資料表說明

#### User (使用者)
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | Int | 主鍵 |
| email | String | 電子郵件（唯一） |
| password | String | 加密密碼 |
| name | String | 姓名 |
| role | Enum | 角色 (ADMIN/EDITOR) |
| createdAt | DateTime | 建立時間 |
| updatedAt | DateTime | 更新時間 |

#### News (新聞)
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | Int | 主鍵 |
| title_zh | String | 中文標題 |
| title_en | String | 英文標題 |
| content_zh | Text | 中文內容 |
| content_en | Text | 英文內容 |
| excerpt_zh | String | 中文摘要 |
| excerpt_en | String | 英文摘要 |
| coverImage | String | 封面圖片 |
| published | Boolean | 是否發布 |
| publishedAt | DateTime | 發布時間 |
| categoryId | Int | 分類 ID |
| authorId | Int | 作者 ID |

#### NewsCategory (新聞分類)
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | Int | 主鍵 |
| name_zh | String | 中文名稱 |
| name_en | String | 英文名稱 |
| slug | String | URL 標識 |

---

## 4. API 設計

### 4.1 RESTful API 端點

#### 新聞相關

| Method | Endpoint | 說明 | 權限 |
|--------|----------|------|------|
| GET | /api/news | 獲取新聞列表 | Public |
| GET | /api/news/:id | 獲取單篇新聞 | Public |
| POST | /api/news | 新增新聞 | Admin |
| PUT | /api/news/:id | 更新新聞 | Admin |
| DELETE | /api/news/:id | 刪除新聞 | Admin |

#### 認證相關

| Method | Endpoint | 說明 |
|--------|----------|------|
| POST | /api/auth/login | 登入 |
| POST | /api/auth/logout | 登出 |
| GET | /api/auth/session | 獲取當前會話 |

#### 檔案上傳

| Method | Endpoint | 說明 | 權限 |
|--------|----------|------|------|
| POST | /api/upload | 上傳圖片 | Admin |

### 4.2 API 回應格式

```typescript
// 成功回應
interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

// 錯誤回應
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

// 分頁回應
interface PaginatedResponse<T> {
  success: true;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
```

---

## 5. 前端頁面設計

### 5.1 頁面結構

| 路由 | 頁面 | 說明 |
|------|------|------|
| /[locale] | 首頁 | 企業形象首頁 |
| /[locale]/about | 關於我們 | 公司簡介、歷史沿革、經營團隊 |
| /[locale]/technology | 技術與服務 | 代工技術、設計服務 |
| /[locale]/investor | 投資人專區 | 公司治理、財務資訊 |
| /[locale]/news | 新聞中心 | 新聞列表 |
| /[locale]/news/:id | 新聞詳情 | 單篇新聞 |
| /[locale]/contact | 聯繫我們 | 聯繫表單 |
| /admin | 後台首頁 | 管理後台 |
| /admin/news | 新聞管理 | 新聞 CRUD |
| /admin/login | 登入 | 後台登入 |

### 5.2 響應式斷點

```css
/* Tailwind CSS 預設斷點 */
sm: 640px   /* 手機橫向 */
md: 768px   /* 平板 */
lg: 1024px  /* 小型桌面 */
xl: 1280px  /* 大型桌面 */
2xl: 1536px /* 超大螢幕 */
```

### 5.3 組件設計

#### Header 組件
- Logo
- 導航選單（桌面版水平、手機版漢堡選單）
- 語言切換器
- 響應式設計

#### Footer 組件
- 公司資訊
- 快速連結
- 社群媒體
- 版權聲明

#### Hero 組件
- 全屏輪播圖
- 標題文字
- CTA 按鈕

---

## 6. 國際化設計

### 6.1 語言檔案結構

```json
// locales/zh-TW.json
{
  "common": {
    "home": "首頁",
    "about": "關於我們",
    "technology": "技術與服務",
    "investor": "投資人專區",
    "news": "新聞中心",
    "contact": "聯繫我們"
  },
  "home": {
    "hero": {
      "title": "專業晶圓代工服務",
      "subtitle": "創新技術，卓越品質"
    }
  }
}
```

### 6.2 語言切換邏輯
- URL 前綴：`/zh-TW/...` 或 `/en/...`
- Cookie 記憶使用者偏好
- 預設語言：繁體中文

---

## 7. 安全設計

### 7.1 認證機制
- 使用 NextAuth.js 進行後台認證
- JWT Token 驗證
- 密碼使用 bcrypt 加密

### 7.2 安全措施
- CSRF 保護
- XSS 防護（React 自動轉義）
- SQL 注入防護（Prisma 參數化查詢）
- 環境變數管理敏感資訊

---

## 8. 部署架構

### 8.1 建議部署方式

```
┌─────────────────┐     ┌─────────────────┐
│   Vercel/自建   │────▶│   MySQL 資料庫   │
│   Next.js App   │     │   (雲端/本地)    │
└─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐
│   圖片存儲       │
│ (Local/S3/OSS)  │
└─────────────────┘
```

### 8.2 環境變數

```env
# 資料庫
DATABASE_URL="mysql://user:password@localhost:3306/powerchip"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# 其他
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

---

## 9. 開發規範

### 9.1 命名規範
- 組件：PascalCase（如 `Header.tsx`）
- 函數：camelCase（如 `getUserById`）
- 常量：UPPER_SNAKE_CASE
- CSS 類別：kebab-case 或 Tailwind

### 9.2 Git 提交規範
```
feat: 新功能
fix: 修復 bug
docs: 文檔更新
style: 程式碼格式
refactor: 重構
test: 測試
chore: 其他
```

---

## 10. 版本紀錄

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0.0 | 2024-01-09 | 初版 SDD |
