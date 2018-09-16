/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TextInputInModal from './TextInputInModal';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            hours: '',
            minutes: ''
        }
    }

    changeState() {
        this.setState((prevState)=>({ modalVisible: !prevState.modalVisible}))
        this.setState({ hours :  ''});
        this.setState({ minutes: '' });
    }

    render() {
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={{ flex: 1 }}>
                <View style={styles.verticalRow}>
                    <Text onPress={() => this.props.navigation.push('multiLineTextInput')} style={styles.tapText}> Click -> MultiLine TextInput </Text>
                    <Text onPress={() => this.props.navigation.push('textInputInScrollView')} style={styles.tapText}> Click -> TextInput In ScrollView </Text>
                    <Text onPress={() => this.changeState()} style={styles.tapText}> Click -> TextInput In Modal </Text>
                </View>
                <TextInputInModal 
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    isVisible={this.state.modalVisible}
                    onChangeHrs={(hrsValue) => this.setState({ hours: hrsValue })}
                    onChangeMins={(minsValue) => this.setState({ minutes: minsValue })}
                    changeState={()=> this.changeState()}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    verticalRow:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tapText:{
        fontSize: 14,
        color: '#000',
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10
    }
})

