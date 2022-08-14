import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	alias: {
		'@config': 'assets/config.sass',
	},
	css: ['boxicons/css/boxicons.min.css', 'assets/index.sass', 'assets/main.css'],
	modules: ['@nuxtjs/tailwindcss'],
})
