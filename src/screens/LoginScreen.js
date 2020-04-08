import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import OnboardingLogo from '../commons/OnboardingLogo'
import { TouchableOpacity } from 'react-native'

class LoginScreen extends Component {
	state = {}
	render() {
		return (
			<Box f={1} center bg='white'>
				<Box f={1} center>
					<OnboardingLogo />
				</Box>
				<Box f={0.9} w={1}>
					<TouchableOpacity>
						<Box
							dir='row'
							shadow={1}
							bg='green'
							w='80%'
							self='center'
							p='2xs'
							radius='xs'>
							<Box mr='sm'>
								<Box bg='white' h={32} w={32} radius='xs' center>
									<Text>G</Text>
								</Box>
							</Box>
							<Box>
								<Text size='md' color='white'>
									Continue with Google
								</Text>
							</Box>
						</Box>
					</TouchableOpacity>
				</Box>
			</Box>
		)
	}
}

export default LoginScreen
