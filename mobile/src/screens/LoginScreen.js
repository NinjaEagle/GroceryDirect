import React, { Component } from 'react'
import { Alert, Animated, TouchableOpacity } from 'react-native'
import { Box, Text } from 'react-native-design-utility'
import OnboardingLogo from '../commons/OnboardingLogo'
import LoginButton from '../commons/LoginButton'
import { FacebookApi } from '../api/Facebook'
import { GoogleApi } from '../api/Google'

const BoxAnimated = Animated.createAnimatedComponent(Box)
class LoginScreen extends Component {
	state = {
		opacity: new Animated.Value(0),
		position: new Animated.Value(0),
	}
	componentDidMount() {
		Animated.parallel([this.positionAnim(), this.opacityAnim()]).start()
	}

	opacityAnim = () => {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 200,
			delay: 300,
		}).start()
	}
	positionAnim = () => {
		Animated.timing(this.state.position, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start()
	}
	onGooglePress = async () => {
		try {
			const token = await GoogleApi.loginAsync()
		} catch (error) {
			console.log('error', error)
		}
	}
	onFacebookPress = async () => {
		try {
			const token = await FacebookApi.loginAsync()
		} catch (error) {
			console.log('error', error)
		}
	}

	render() {
		const { opacity } = this.state
		const logoTranslate = this.state.position.interpolate({
			inputRange: [0, 1],
			outputRange: [150, 0],
		})
		return (
			<Box f={1} center bg='white'>
				<BoxAnimated
					style={{ flex: 1, transform: [{ translateY: logoTranslate }] }}>
					<Box f={1} center>
						<OnboardingLogo />
					</Box>
				</BoxAnimated>

				<BoxAnimated style={{ flex: 0.9, width: '100%', opacity }}>
					<LoginButton
						children='Continue with Google'
						onPress={this.onGooglePress}
						type='google'
					/>
					{/* <LoginButton type='google'>Continue with Google</LoginButton> */}
					<LoginButton
						children='Continue with Facebook'
						onPress={this.onFacebookPress}
						type='facebook'
					/>
				</BoxAnimated>
			</Box>
		)
	}
}

export default LoginScreen
