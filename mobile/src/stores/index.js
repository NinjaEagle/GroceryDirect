import { AuthStore } from './Auth'

const authStore = AuthStore.create()
export const store = {
	authStore,
}
window.MobxStore = store
