import type { APIRoute } from "astro";
import { storeUrl, feedbackEmail } from "../site";

// llms.txt —— 给 AI / 生成式引擎的站点摘要（GEO 约定，https://llmstxt.org）。
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? "https://qimunap.pages.dev/").replace(/\/$/, "");
  const body = `# 憩目 Qimu

> 憩目（Qimu）是一款常驻 Windows 系统托盘的本地护眼休息提醒工具。基于眼科界广为流传的 20-20-20 法则，在你进入专注状态时温柔地提醒你抬起头、望向远方——不催促、不打断。无账号、不联网上报、用眼数据不出本机。

## 核心功能
- 20-20-20 提醒：默认每用眼 20 分钟提醒一次小憩（20 秒望向 6 米外）。
- 小憩与长憩：小憩 20 秒望向窗外、眨眨眼；长憩带分步放松引导（闭眼深呼吸、转动眼球、远近交替、起身走动）。
- 憩屏：到点时铺满屏幕的休息画面，浅色 / 深色跟随系统，随时可「跳过本次憩目」。
- 智能免打扰：看视频 / 演示 / 游戏（全屏）或麦克风占用（会议 / 通话）时自动不打扰；多显示器可盖住所有屏幕或仅主屏。
- 用眼统计：当日用眼记录时间轴、每周趋势，全部本地存储。
- 隐私：无遥测、不收集个人数据、数据只留在本机（仅购买与授权校验会连接 Microsoft Store）。

## 价格
核心功能永久免费。憩目 Pro 为一次性买断，解锁自定义小憩频率与时长，也是对开发的一份支持。

## 平台
- Windows：已在 Microsoft Store 上架。
- Mac / Android：开发中。

## 链接
- 官网: ${base}/
- 下载（Microsoft Store）: ${storeUrl}
- 反馈邮箱: ${feedbackEmail}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
