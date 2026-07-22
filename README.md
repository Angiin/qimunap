# 憩目 Qimu · 官网

> 让眼睛，休憩片刻。

[憩目 Qimu](https://qimuapp.pages.dev) 官方网站 —— 一款常驻 Windows 系统托盘的**本地护眼休息提醒**工具的产品站。基于 Astro 5 + Tailwind CSS v4 构建，部署在 Cloudflare Pages。

🔗 **线上地址：** https://qimuapp.pages.dev

## 关于「憩目」

憩目基于眼科界广为流传的 **20-20-20 法则**，在你进入专注状态时温柔地提醒你抬头远眺——不催促、不打断。无账号、不联网上报、用眼数据不出本机。

- **20-20-20 提醒**：默认每用眼 20 分钟提醒小憩（望向 6 米外 20 秒）
- **小憩 / 长憩**：长憩带分步放松引导（闭眼深呼吸、转动眼球、远近交替、起身走动）
- **憩屏**：到点铺满屏幕的休息画面，浅色 / 深色跟随系统，可随时跳过
- **智能免打扰**：全屏（视频 / 演示 / 游戏）或麦克风占用（会议 / 通话）时自动不打扰
- **用眼统计**：当日时间轴 + 每周趋势，全部本地存储
- **隐私优先**：无遥测、不收集个人数据、数据只留在本机

### 安装（Windows 10 / 11）

- **Microsoft Store**：<https://apps.microsoft.com/detail/9N5V74X94TC3>
- **winget**：

  ```powershell
  winget install --source msstore 9N5V74X94TC3
  ```

Mac / Android 版开发中。

## 技术栈

- [Astro 5](https://astro.build/)（`static` 静态输出）
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`）
- TypeScript
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- 部署：Cloudflare Pages
- Node **22**（见 `.node-version`）

## 本地开发

```bash
# 需要 Node 22（见 .node-version）
npm install
npm run dev        # 开发服务器 → http://localhost:4321
npm run build      # 产物输出到 dist/
npm run preview    # 本地预览构建产物
```

## 项目结构

```
src/
├─ pages/
│  ├─ index.astro       # 首页
│  ├─ llms.txt.ts       # GEO：给 AI / 生成式引擎的站点摘要（llmstxt.org 约定）
│  └─ robots.txt.ts     # 放行爬虫 + 显式放行主流 AI 引擎
├─ components/          # Hero / Pricing / Footer / … 各区块
├─ layouts/Layout.astro # <head>：SEO / OG / JSON-LD 结构化数据
├─ site.ts              # 🔑 站点常量单一数据源（storeUrl / storeId / wingetCmd / 反馈邮箱 …）
└─ styles/global.css    # Tailwind v4 设计 tokens
public/                 # 静态资源（截图、图标、og.png、/experience 交互 demo）
```

> `dist/`、根目录 `assets/` 与 `experience/`（工作文件）已在 `.gitignore` 中忽略。

### 改站点信息

- **产品信息**（Store 链接、产品 ID、winget 命令、反馈邮箱、价格）：改 `src/site.ts` 一处
- **正式域名**：改 `astro.config.mjs` 的 `site` 一处即可 —— canonical / OG / sitemap / robots.txt / llms.txt 全从它取

## SEO / GEO

- **SEO**：`<title>` / `description` / canonical / Open Graph / Twitter Card + `SoftwareApplication` JSON-LD 结构化数据（`Layout.astro`）；`sitemap-index.xml` 由 `@astrojs/sitemap` 自动生成
- **GEO**（面向生成式引擎）：`/llms.txt` 站点摘要 + `/robots.txt` 显式放行 GPTBot / ClaudeBot / PerplexityBot 等

## 部署

站点为 Astro 静态输出，产物在 `dist/`。当前部署在 Cloudflare Pages（[qimuapp.pages.dev](https://qimuapp.pages.dev)）。

- **构建命令**：`npm run build`
- **输出目录**：`dist`
- 建议接入 Cloudflare Pages 的 **Git 集成**，`main` 合并后自动构建部署；或用 `npx wrangler pages deploy dist --project-name qimuapp` 手动上传。

## Roadmap

- [x] 官网上线（Astro 5 + Tailwind v4）
- [x] SEO / GEO 优化（robots / llms.txt / JSON-LD / sitemap）
- [x] 定价区 + `/experience` 交互 demo
- [x] winget 一键安装入口
- [ ] 用户反馈收集（表单 / issue 集成）
- [ ] 公开 Roadmap 页面
- [ ] Mac / Android 版本落地页
- [ ] 接入正式域名

## 链接

- 官网：<https://qimuapp.pages.dev>
- Microsoft Store：<https://apps.microsoft.com/detail/9N5V74X94TC3>
- 反馈邮箱：qimuapp@outlook.com

---

版权 © 2026 憩目 Qimu · 保留所有权利。
