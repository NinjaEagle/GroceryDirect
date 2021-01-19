import React, { Component } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { inject, observer } from "mobx-react/native";
import CloseBtn from "../commons/CloseBtn";
import CartItem from "../components/CartItem";
import { theme } from "../constants/theme";

@inject("shoppingCartStore")
@observer
class ShoppingCartScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: "My Cart",
		headerLeft: (
			<CloseBtn left size={30} onPress={() => navigation.goBack(null)} />
		),
	});
	state = {};

	renderItem = ({ item }) => <CartItem product={item} />;

	keyExtractor = (item) => String(item.id);

	renderList = () => {
		const { shoppingCartStore } = this.props;

		if (shoppingCartStore.totalProducts === 0) {
			return (
				<Box center f={1}>
					<Text>Cart Empty</Text>
				</Box>
			);
		}

		//FlatList components requires an Array, MobX provides us with an ObservableArray
		// console.log('products', shoppingCartStore.products);
		// console.log('productList', shoppingCartStore.productsList)
		return (
			<FlatList
				data={shoppingCartStore.productsList}
				//shoppingCartStore.productsList returns an Array
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				extraData={shoppingCartStore}
			/>
		);
	};

	renderCheckoutBtn = () => {
		const { shoppingCartStore } = this.props;

		if (shoppingCartStore.totalProducts === 0) {
			return null;
		}

		return (
			<Box bg='white' p='xs'>
				<TouchableOpacity>
					<Box h={45} bg='grey' center radius={6} position='relative'>
						<Text bold color='white'>
							Checkout
						</Text>

						<Box
							position='absolute'
							bg='greyDark'
							radius={6}
							center
							p='xs'
							style={{ right: theme.space.xs }}
						>
							<Text color='white' size='xs'>
								${shoppingCartStore.totalAmount}
							</Text>
						</Box>
					</Box>
				</TouchableOpacity>
			</Box>
		);
	};

	render() {
		return (
			<Box f={1}>
				<StatusBar barStyle='dark-content' />
				{this.renderList()}
				{this.renderCheckoutBtn()}
			</Box>
		);
	}
}

export default ShoppingCartScreen;
