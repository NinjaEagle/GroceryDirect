import React, { Component } from 'react'
import { Box } from 'react-native-design-utility'
import { StatusBar, FlatList, Text } from 'react-native'

import CategoryCard from '../components/CategoryCard'
import { theme } from '../constants/theme'
import DealCaroussel from '../components/DealCaroussel'

const categories = [
	{
		id: 1,
		title: 'Grocery',
		image: require('../../assets/img/all/part10/cart.png'),
	},
	{
		id: 2,
		title: 'Drugs',
		image: require('../../assets/img/all/part10/drugs.png'),
	},
	{
		id: 3,
		title: 'Pets',
		image: require('../../assets/img/all/part10/pets.png'),
	},
	{
		id: 4,
		title: 'video games',
	},
]

const NUM_COLUMNS = 3

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'InStore',
		gestureEnabled: 'true',
	}
	state = {}
	renderItem = ({ item, index }) => {
		let style = {}

		if (index % NUM_COLUMNS !== 0) {
			style.borderLeftWidth = 2
			style.borderLeftColor = theme.color.greyLighter
		}
		return (
			<Box w={1 / NUM_COLUMNS} bg='white' h={120} style={style}>
				<CategoryCard {...item} />
			</Box>
		)
	}
	keyExtractor = (item) => String(item.id)

	separator = () => <Box h={2} bg='greyLighter' />

	render() {
		console.log('Home Screen')
		return (
			<Box f={1}>
				<StatusBar barStyle='light-content' />
				<Box h={130} bg='white' w={'100%'}>
					<DealCaroussel />
				</Box>

				<Box f={1} p={10}>
					<FlatList
						data={categories}
						renderItem={this.renderItem}
						keyExtractor={this.keyExtractor}
						numColumns={NUM_COLUMNS}
						ItemSeparatorComponent={this.separator}
					/>
				</Box>
			</Box>
		)
	}
}

export default HomeScreen
