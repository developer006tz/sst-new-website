// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'SocialSmartTech - Custom Software Development & Technology Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'East Africa\'s leading software development company specializing in custom solutions, mobile apps, web applications, and logistics software. Transform your business with smart technology solutions since 2019.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#060617' },
        
        { name: 'keywords', content: 'software development, mobile apps, web applications, logistics software, East Africa technology, UI/UX design, database design, software architecture, system development, software consultation' },
        
        { property: 'og:title', content: 'SocialSmartTech - Custom Software Development & Technology Solutions' },
        { property: 'og:description', content: 'East Africa\'s leading software development company specializing in custom solutions, mobile apps, web applications, and logistics software. Transform your business with smart technology solutions since 2019.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732086558/social-smarttech_faoen3.png' },
        { property: 'og:image:width', content: '1501' },
        { property: 'og:image:height', content: '1501' },
        { property: 'og:url', content: 'https://socialsmarttech.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'SocialSmartTech' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'en_GB' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'SocialSmartTech - Custom Software Development & Technology Solutions' },
        { name: 'twitter:description', content: 'East Africa\'s leading software development company specializing in custom solutions, mobile apps, web applications, and logistics software. Transform your business with smart technology solutions since 2019.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732086558/social-smarttech_faoen3.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://socialsmarttech.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            "name": "SocialSmartTech",
            "url": "https://socialsmarttech.com",
            "logo": "https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732086558/social-smarttech_faoen3.png",
            "description": "Founded in 2019, SocialSmartTech provides custom software development and logistics management solutions across East Africa.",
            "foundingDate": "2019",
            "areaServed": "East Africa",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "East Africa"
            },
            "services": [
              {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Create powerful, user-friendly mobile applications for iOS and Android platforms."
              },
              {
                "@type": "Service",
                "name": "Web Application Development",
                "description": "Build scalable and responsive web applications with modern technologies."
              },
              {
                "@type": "Service",
                "name": "UI/UX Design",
                "description": "Design intuitive and engaging user interfaces for web and mobile applications."
              },
              {
                "@type": "Service",
                "name": "Logistics & Freight Software",
                "description": "Specialized software solutions for logistics and freight management."
              }
            ]
          })
        }
      ]
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots'],
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
  site: {
    url: 'https://socialsmarttech.com',
    name: 'SocialSmartTech Co. Ltd',
  },
  robots: {
    sitemap: 'https://socialsmarttech.com/sitemap.xml',
    allow: '/',
    disallow: ['/admin', '/admin/*','/api', '/api/*'],
    blockNonSeoBots: true,
    cacheControl: 'max-age=14400, must-revalidate',

  },
})