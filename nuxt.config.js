export default {
    // target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'RSdesign',
        htmlAttrs: {
            lang: 'ja',
            prefix: 'og: http://ogp.me/ns#'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'フロントエンジニアRyousukeのポートフォリオサイトです' },
            { hid: 'og:title', property: 'og:title', content: 'RSdesign' },
            { hid: 'og:description', property: 'og:description', content: 'フロントエンジニアRyousukeのポートフォリオサイトです' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://my-portfolio-v2-1524e.web.app/' },
            { hid: 'og:image', property: 'og:image', content: 'https://my-portfolio-v2-1524e.web.app/still/og_RSdesign.jpg' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'RSdesign' },
            { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
            { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:site', name: 'twitter:site', content: '@RSdesign25' },
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: '/my-portfolio_v2/favicon.ico' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
            { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/aos', ssr: false },
        "~/plugins/firebase.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        "@nuxtjs/dotenv"
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_media.scss',
            '~/assets/scss/_variable.scss',
            '~/assets/scss/_common.scss',
            '~/assets/scss/_animation.scss',
        ]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // router: {
    //     base: '/my-portfolio_v2/'
    // }
}
