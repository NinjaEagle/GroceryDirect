import {
	createSwitchNavigator,
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation'
import React, { Component } from 'react'
import { NavigationService } from '../api/NavigationService'

const AuthNavigator = createStackNavigator(
	{
		Login: {
			getScreen: () => require('./LoginScreen').default,
		},
	},
	{
		navigationOptions: {
			header: null,
		},
	}
)

const TabNavigator = createBottomTabNavigator({
	Home: {
		getScreen: () => require('./HomeScreen').default,
	},
})

const MainNavigator = createBottomTabNavigator({
	Tab: TabNavigator,
})

const AppNavigator = createSwitchNavigator(
	{
		Splash: {
			getScreen: () => require('./SplashScreen').default,
		},
		Auth: AuthNavigator,
		Main: MainNavigator,
	},
	{
		intialRouteName: 'Splash',
	}
)

class Navigation extends Component {
	state = {}
	render() {
		return <AppNavigator ref={(r) => NavigationService.setTopLevelNavigator(r)} />
	}
}

export default Navigation
