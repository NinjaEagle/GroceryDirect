import React, { Component } from "react";
import { Box } from "react-native-design-utility";
import TabItem from "./TabItem";

class TabBar extends Component {
	render() {
		const { navigation } = this.props;

		const { routes, index } = navigation.state;

		return (
			<Box h={70} bg='white' dir='row' shadow={0}>
				{routes.map((route, i) => {
					return (
						<TabItem
							navigation={navigation}
							key={route.routeName}
							{...route}
							isActive={index === i}
						/>
					);
				})}
			</Box>
		);
	}
}

export default TabBar;
