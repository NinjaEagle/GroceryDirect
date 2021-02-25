import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { StatusBar } from 'react-native'

class StoresScreen extends Component {
	state = {}

	render() {
		return (
			<Box f={1} center>
				<StatusBar hidden={false} barStyle='light-content' />
				<Text>Stores Screen</Text>
			</Box>
		)
	}
}

export default StoresScreen
