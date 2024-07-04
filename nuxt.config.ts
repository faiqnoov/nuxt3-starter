// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-07-04",
	modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui'
	}
})