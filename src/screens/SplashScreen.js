import React, {Component} from 'react';
import  {Box, Text} from 'react-native-design-utility';
import {Image} from 'react-native';
import {images} from '../constants/images';

class SplashScreen extends Component {
    state = {};
    componentDidMount(){
        this.checkAuth();
    }
    checkAuth = () => {
        // setTimeout(() => {
        //     this.props.navigation.navigate('Auth');
        //     }, 2000);
    }

    render() {
        return (
            <div>
                <Box f={1} center>
                    <Box mb="sm" >
                            <Image source={images.logo} />
                    </Box>
                    <Text size="2xl">
                        EZ Go Shopping
                    </Text>
                    <Text>Buying and Selling NYC</Text>
                </Box>
            </div>
        );
    }
}

export default SplashScreen;