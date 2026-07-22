// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 憩目官网 · Astro 5 + Tailwind v4
// 🔴 换正式域名时只改 site 这一处 —— canonical / og / sitemap / robots.txt / llms.txt 全从它取。
export default defineConfig({
  site: 'https://qimuapp.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
