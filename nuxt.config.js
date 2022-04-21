export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GOMORRAN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gomorran is a Finnish extreme metal band founded in Helsinki 2019. The band takes heavy influence from Scandinavian death metal and from the murkiness of black metal.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#000000' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-url', property: 'og:url', content: 'https://gomorran.com/' },
      { hid: 'og-title', property: 'og:title', content: 'GOMORRAN' },
      { hid: 'og-description', property: 'og:description', content: 'Gomorran is a Finnish extreme metal band founded in Helsinki 2019. The band takes heavy influence from Scandinavian death metal and from the murkiness of black metal.' },
      { hid: 'og-image', property: 'og:image', content: '/og-logo.jpg' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/colors.scss',
      '@/assets/scss/defaults.scss',
      'material-design-icons-iconfont/dist/material-design-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
        'assets/scss/mixins.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
