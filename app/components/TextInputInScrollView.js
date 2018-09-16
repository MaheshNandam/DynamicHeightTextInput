/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    findNodeHandle
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default class TextInputInScrollView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contactNumber: '',
            aboutYourSelf: '',
            password: '',
            height: 0
        }
    }

    inputFocused(refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
    }

    render() {
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={{ flex: 1 }} onPress={() => {
                Keyboard.dismiss()
            }}>
                <KeyboardAwareScrollView  ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                    <TextInput
                        placeholder={'Your name'}
                        placeholderTextColor={'#bfbfbf'}
                        placeholderStyle={styles.placeholderStyle}
                        underlineColorAndroid='transparent'
                        keyboardType={'default'}
                        value={this.state.name}
                        style={styles.textInputStyle}
                    />
                    <TextInput
                        placeholder={'Your email'}
                        placeholderTextColor={'#bfbfbf'}
                        placeholderStyle={styles.placeholderStyle}
                        underlineColorAndroid='transparent'
                        keyboardType={'email-address'}
                        value={this.state.email}
                        style={styles.textInputStyle}
                    />
                    <TextInput
                        placeholder={'Your contact number'}
                        placeholderTextColor={'#bfbfbf'}
                        placeholderStyle={styles.placeholderStyle}
                        underlineColorAndroid='transparent'
                        keyboardType={'phone-pad'}
                        value={this.state.contactNumber}
                        style={styles.textInputStyle}
                    />
                    <TextInput
                        ref={'AboutYourSelf'}
                        editable={true}
                        multiline={true}
                        placeholder={'AboutYourSelf'}
                        placeholderTextColor={'#bfbfbf'}
                        placeholderStyle={styles.placeholderStyle}
                        underlineColorAndroid='transparent'
                        keyboardType={'default'}
                        value={this.state.aboutYourSelf}
                        onChangeText={editedText => { 
                            this.setState({ aboutYourSelf: editedText }),
                            this.inputFocused('Password')
                        }}
                        onContentSizeChange={(event) => this.setState({ height: event.nativeEvent.contentSize.height })}
                        style={[styles.textInputStyle, {
                            height: Math.min(120, Math.max(40, this.state.height)),
                        }]}
                        onFocus={() => this.inputFocused('Password')}
                    />
                    <TextInput
                        ref={'Password'}
                        placeholder={'Password!'}
                        placeholderTextColor={'#bfbfbf'}
                        placeholderStyle={styles.placeholderStyle}
                        underlineColorAndroid='transparent'
                        keyboardType={'default'}
                        value={this.state.password}
                        style={styles.textInputStyle}
                    />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#000'
    },
    scrollStyle:{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#6f6f6f',
    },
    textInputStyle: {
        marginHorizontal: 15,
        marginVertical: 30,
        height: 40,
        color: '#000',
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: '#d5d5d5',
        borderWidth: 0.5,
        backgroundColor: '#f5f5f5',
    },
})

