import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation-stack';
import React, {Component} from 'react';

const AuthNavigator = createStackNavigator (
    {
        Login:{
            getScreen: () => require('./LoginScreen').default,
        }
    }
);

const TabNavigator = createBottomTabNavigator({
    Home: {
    getScreen: () => require('./HomeScreen').default,
}});

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
})

const AppNavigator = createSwitchNavigator({
    Splash: {
        getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
    },
    {
        initialRouteName: 'Splash',
    }

);

class Navigation extends Component {
    state ={

    };
    render(){
        return <AppNavigator />;
    }
}

export default Navigation;