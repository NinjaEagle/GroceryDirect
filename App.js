import React, {Component} from 'react';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import Navigation from './src/screens';
import { theme } from './theme';
import { ActivityIndicator } from 'react-native';
import {cacheImages} from './src/utils/cacheImages';
import {images} from './src/constants/images';

export default class App extends React.Component {
  state ={
    isReady: false 
  }
  componentDidMount(){
    this.cacheAssets()
  }
  cacheAssets = async() => {
    const imageAssets = cacheImages (Object.values(images))
    await Promise.all([...imagesAssets]);
    this.setState({isReady: true})
  }

  render(){
    if(!this.state.isReady){
      return( 
        <Box f={1} center bg= "white">
          <ActivityIndicator size="large"/>
          <Text>Hi</Text>
        </Box>
      )
    }
    return (
      <UtilityThemeProvider >
          <Navigation/>
      </UtilityThemeProvider>
    );
  }
 }


