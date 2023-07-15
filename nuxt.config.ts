import { appDescription } from './constants/index'

export default defineNuxtConfig({
  //  #region 组件名自定义
  components: [
    { path: '~/components/common', prefix: 'l' },
    '~/components',
  ],
  // #endregion
  modules: [
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  i18n: {
    vueI18n: './i18n/index.ts', // if you are using custom path, default
  },
  routeRules: {
    '/admin/**': { ssr: false },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'css',
    themes: ['dark'],
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  router: {
    options: {
      hashMode: false,
    },
  },
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
    devProxy: {
      '/gitee': {
        target: 'https://gitee.com', // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        class: 'h-full w-full',
      },
      bodyAttrs: {
        class: 'h-full w-full',
      },
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
})
