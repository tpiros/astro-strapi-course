import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en']
  },
  image: {
    domains: ['localhost:1337']
  },
  redirects: {
    '/blog/es': '/blog/es/1',
    '/blog': '/blog/1'
  },
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});