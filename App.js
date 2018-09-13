/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
// import AutoTextInputHeight from './app/AutoTextInputHeight';
import WhatsAppTextInput from 'react-native-whatsapp-textinput';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ bottom: 'always' }} style={{
        flex: 1,
      }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss()
          }}>
          <View style={{
            flex: 1
          }}>
            <View style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text>What's App Chat Room UI</Text>
            </View>
            
            <WhatsAppTextInput
              backgroundColor={'#fff'}
              borderTopColor={'#f5f5f5'}
              placeholderText={'Aa'}
              placeholderTextColor='#9e9e9e'
              textColor={'#000'}
              textInputBgColor={'#f5f5f5'}
              editable={true}
              multiline={true}
              keyboardType={'default'}
              sendButtonBgColor={'#1a75ff'}
              sendImage={require('./images/sendIcon.png')}
              onPress={()=>alert('sent')}
              sendButtonBgDisableColor={'#f5f5f0'}
              sendButtonBgEnableColor={'#002080'}
        />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

