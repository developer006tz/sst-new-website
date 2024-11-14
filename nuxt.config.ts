import motionConfig from "./motion.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
    editorSupport: true,
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 600, 700],
        ital: [400]
      },
      Inter: {
        wght: [400, 500],
        ital: [400]
      },
      'DM+Sans': {
        wght: [400, 500, 700],
        ital: [400]
      }
    },
    display: 'swap',
    preload: true,
    preconnect: true,
    useStylesheet: true
  },
})