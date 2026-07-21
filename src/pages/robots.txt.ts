import type { APIRoute } from "astro";

// robots.txt —— 放行所有爬虫 + 显式放行主流 AI / 生成式引擎（GEO）。Sitemap 从 astro.config 的 site 取。
export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? "https://qimunap.pages.dev/";
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
  ];
  const body = [
    "# 憩目 Qimu",
    "User-agent: *",
    "Allow: /",
    "",
    "# 允许 AI / 生成式引擎抓取（GEO）",
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, "Allow: /"]),
    "",
    `Sitemap: ${base}sitemap-index.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
