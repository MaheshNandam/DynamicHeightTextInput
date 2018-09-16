/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Keyboard,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import WhatsAppTextInput from 'react-native-whatsapp-textinput';

export default class MultiLineTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        }
    }

    render() {
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>Whats App TextInput</Text>
                        </View>

                        <WhatsAppTextInput
                            backgroundColor={'#fff'}
                            borderTopColor={'#f5f5f5'}
                            placeholderText={'Aa'}
                            placeholderTextColor='#9e9e9e'
                            messageTextColor={'#000'}
                            textInputBgColor={'#f5f5f5'}
                            editable={true}
                            multiline={true}
                            keyboardType={'default'}
                            sendButtonBgColor={'#1a75ff'}
                            sendButtonImage={require('../../images/sendIcon.png')}
                            sendButtonDisableColor={'#f5f5f0'}
                            sendButtonEnableColor={'#002080'}
                        />
                    </View>
            </SafeAreaView>
        );
    }
}

