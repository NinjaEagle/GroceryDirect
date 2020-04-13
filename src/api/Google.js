import Constants from 'expo-constants'
import * as Google from 'expo-google-app-auth'

const permissions = ['profile', 'email']

const loginAsync = async () => {
	try {
		const result = await Google.logInAsync({
			iosClientId: Constants.manifest.extra.googleAppId.ios,
			androidClientId: Constants.manifest.extra.googleAppId.android,
			permissions,
		})

		if (result.type === 'success') {
			return Promise.resolve(result.accessToken)
		}
		return Promise.reject('No success')
	} catch (error) {
		return Promise.reject(error)
	}
}

export const GoogleApi = {
	loginAsync,
}
