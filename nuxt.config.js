export default {
    // target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'RSdesign',
        htmlAttrs: {
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'フロントエンジニアSakuraiのポートフォリオサイトです' }
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
