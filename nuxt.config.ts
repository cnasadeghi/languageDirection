// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    vueI18n: './i18n.config.ts', // if you are using custom path, default 
    strategy: 'prefix_except_default',
    defaultLocale: 'fa',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: './lang/en.json'
      },
      {
        code: 'fa',
        name: 'فارسی',
        file: './lang/fa.json'
      },
    ],
    pages:{
      aboutus:{
        en:'/en/aboutus'
      }
    }
  }
})
