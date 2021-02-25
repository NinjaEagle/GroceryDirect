import Constants from 'expo-constants'
import * as Facebook from 'expo-facebook'

const permissions = ['public_profile', 'email']

const loginAsync = async () => {
	try {
		Facebook.initializeAsync(
			Constants.manifest.facebookAppId,
			Constants.manifest.facebookDisplayName
		)
		// Facebook.initializeAsync(appId: string | undefined, appName: string | undefined): Promise<void>
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(
			Constants.manifest.facebookAppId,
			{ permissions }
		)

		if (type === 'success') {
			return Promise.resolve(token)
		}

		return Promise.reject('No success')
	} catch (error) {
		return Promise.reject(error)
	}
}

export const FacebookApi = {
	loginAsync,
}
