export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Prosk Org',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
		hid: 'description', 
		name: 'description', 
		content: 'Prosk es la nueva comunidad de talentos independientes donde podés mostrarte y encontrar a los mejores.' 
	  },
	  { property: 'og:image', content: "@/assets/img/meta_prosk.png" || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
	  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'},

    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	  '@/assets/css/styanimations.css',
	  '@/assets/css/styglobals.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	// { src: '~/plugins/localStorage.js', mode: 'client' },
	'@/plugins/slidersConfig',
	// '@/plugins/googlemapsConfig'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
	'@nuxtjs/dotenv',
	'@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
	'nuxt-material-design-icons',
	'vue-geolocation-api/nuxt',
	'@nuxtjs/gtm',
	['@nuxtjs/google-adsense', {
		id: 'ca-pub-6638612991977084'
	  }]

	['nuxt-gmaps', {
		key: "AIzaSyCNooIeXDvdlfzJbrQ6EJvPCh7hnnibd04",
		//you can use libraries: ['places']
	  }]
  ],

  geolocation:  {
    watch: true,
  },
  googleAnalytics: {
    id: 'UA-151425464-1'
  },
  gtm: {
    id: 'GTM-W32NXHL'
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },
//   env: {
//     baseURL: process.env.BASE_URL || 'https://prosk-prod.bigcheese.uy/proskbackend/rest1/'
//   },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://prosk-prod.bigcheese.uy/proskbackend/rest/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    // port: 8080, // desarrollo
	host: '0', // produccion
    port: 3000  // produccion
  }
}
