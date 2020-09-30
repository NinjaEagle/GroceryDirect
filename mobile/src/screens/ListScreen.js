import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { StatusBar } from 'react-native'

class ListScreen extends Component {
	state = {}

	render() {
		return (
			<Box f={1} center>
				<StatusBar hidden={false} barStyle='light-content' />
				<Text>List Screen</Text>
			</Box>
		)
	}
}

export default ListScreen
