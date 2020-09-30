import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { StatusBar } from 'react-native'

class OrderScreen extends Component {
	state = {}

	render() {
		return (
			<Box f={1} center>
				<StatusBar hidden={false} barStyle='light-content' />
				<Text>Order Screen</Text>
			</Box>
		)
	}
}

export default OrderScreen
