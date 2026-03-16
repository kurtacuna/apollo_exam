import type { Pinia } from 'pinia'
import { createStatePersistence } from 'pinia-plugin-state-persistence'

export default defineNuxtPlugin((nuxtApp) => {
    (nuxtApp.$pinia as Pinia).use(
		createStatePersistence()
	)
})