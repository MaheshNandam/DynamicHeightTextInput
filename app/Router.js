import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import MultiLineTextInput from './components/MultiLineTextInput';
import TextInputInModal from './components/TextInputInModal';
import TextInputInScrollView from './components/TextInputInScrollView';

const AppRoute = createStackNavigator({
    home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Page'
        })
    },
    multiLineTextInput: {
        screen: MultiLineTextInput,
        navigationOptions: ({ navigation }) => ({
            title: 'MultiLine TextInput'
        })
    },
    textInputInModal:{
        screen: TextInputInModal,
        navigationOptions: ({ navigation }) => ({
            title: 'TextInput In Modal'
        })
    },
    textInputInScrollView:{
        screen: TextInputInScrollView,
        navigationOptions: ({ navigation }) => ({
            title: 'TextInput In ScrollView'
        })
    }
}, 
{
    initialRouteName: 'home'
});

export default () => (
    <AppRoute />
)
