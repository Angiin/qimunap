// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 憩目官网 · Astro 5 + Tailwind v4
// 部署到 GitHub Pages 项目站点时，把 site/base 打开（见下方注释）。
export default defineConfig({
  // site: 'https://angiin.github.io',
  // base: '/qimunap',
  vite: {
    plugins: [tailwindcss()],
  },
});
