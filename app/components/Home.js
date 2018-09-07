/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native';
import { SafeAreaView, NavigationActions} from 'react-navigation'; //from ˆ2 version
import DeviceInfo from "react-native-device-info";
import CommonStyle from './CommonStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Aa',
      height: 0,
      keyboardOffset: new Animated.Value(0)
    }
  }

  componentDidMount(){
    this._keyboardWillShowSubscription = Keyboard.addListener(
      "keyboardWillShow",
      e => this._keyboardWillShow(e)
    );
    this._keyboardWillHideSubscription = Keyboard.addListener(
      "keyboardWillHide",
      e => this._keyboardWillHide(e)
    );
  }

  _keyboardWillShow(e) {
    Animated.spring(this.state.keyboardOffset, {
      toValue:
        DeviceInfo.getModel() === "iPhone X"
          ? e.endCoordinates.height- 34
          : e.endCoordinates.height,
      friction: 8
    }).start();
  }

  _keyboardWillHide(e) {
    Animated.spring(this.state.keyboardOffset, {
      toValue: 0,
      friction: 8
    }).start();
  }

  render() {
    return (
      <SafeAreaView forceInset={{bottom: 'always'}} style={{
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
            <Animated.View style={{
              // flex: 1,
              // justifyContent: 'flex-end',
              borderTopColor: '#f5f5f5',
              borderTopWidth: 1,
              padding: 5,
              backgroundColor: '#fff',
              marginBottom: this.state.keyboardOffset,
              // height: Math.min(120, Math.max(35, this.state.height)),
            }} >
              <View style={{
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
                <View style={{
                  flex: 1,
                  marginRight: 15,
                  justifyContent: 'center',
                }}>
                  <TextInput
                    editable={true}
                    multiline={true}
                    placeholder={this.state.text}
                    placeholderTextColor="#9e9e9e"
                    placeholderStyle={{
                      fontSize: 12,
                      color: '#000',
                      textAlignVertical: 'center'
                    }}
                    underlineColorAndroid='transparent'
                    keyboardType={'default'}
                    value={this.state.text}
                    onChangeText={text => console.log(text)}
                    onContentSizeChange={(event) =>
                      this.setState({
                        height: event.nativeEvent.contentSize.height
                      })
                    }
                    style={[CommonStyle.textInputView, {
                      height: Math.min(120, Math.max(35, this.state.height)),
                      textAlignVertical: 'center',
                    }]}
                  />
                </View>
                <View style={{
                  justifyContent: 'flex-end'
                }}>
                  <View style={{
                    backgroundColor: '#1a75ff',
                    paddingVertical: 15,
                    paddingLeft: 20,
                    paddingRight: 15,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40
                  }}>
                    <Image
                      style={{
                        width: 30,
                        height: 30
                      }}
                      source={require('../../images/sendIcon.png')} />
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}
