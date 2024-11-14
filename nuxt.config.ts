// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
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
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'fade-in': {
            initial: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 800,
                ease: 'easeOut'
              }
            }
          },
          'slide-left': {
            initial: { x: -100, opacity: 0 },
            visible: { 
              x: 0,
              opacity: 1,
              transition: {
                duration: 700,
                ease: 'easeOut'
              }
            }
          },
          'slide-right': {
            initial: { x: 100, opacity: 0 },
            visible: { 
              x: 0,
              opacity: 1,
              transition: {
                duration: 700,
                ease: 'easeOut'
              }
            }
          },
          'zoom-in': {
            initial: { scale: 0.5, opacity: 0 },
            visible: { 
              scale: 1,
              opacity: 1,
              transition: {
                duration: 600,
                ease: 'easeOut'
              }
            },
            hover: {
              scale: 1.05,
              transition: {
                duration: 300
              }
            }
          },
          'cards-enter': {
            initial: { y: 100, opacity: 0, scale: 0.9 },
            visible: { 
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 800,
                ease: 'easeOut'
              }
            },
            hover: {
              y: -5,
              transition: {
                duration: 200
              }
            }
          },
          'bounce-in': {
            initial: { scale: 0, opacity: 0 },
            visible: { 
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
              }
            }
          },
          'reveal': {
            initial: { 
              opacity: 0,
              y: 20,
              scale: 0.9
            },
            visible: { 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 500,
                ease: 'easeOut'
              }
            }
          },
          'hero-text': {
            initial: { 
              opacity: 0,
              y: 40,
              scale: 0.95
            },
            visible: { 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1000,
                ease: [0.215, 0.610, 0.355, 1.000]
              }
            }
          },
          'stagger-fade': {
            initial: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                ease: 'easeOut'
              }
            }
          }
        }
      }
    }
  }
})