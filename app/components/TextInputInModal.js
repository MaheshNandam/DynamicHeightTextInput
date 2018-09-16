/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    Alert,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import RNModal from "react-native-modal";
import DeviceInfo from 'react-native-device-info';
let { height, width } = Dimensions.get('window');

export default class TextInputInModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RNModal useNativeDriver={true} transparent={true} isVisible={this.props.isVisible} style={{ margin: 0, padding: 0 }}>
                <KeyboardAvoidingView style={styles.mContainer} behavior={Platform.OS == 'ios' ? 'position' : 'height'} enabled>
                    <Text style={styles.hideText} onPress={() => this.props.changeState()}>Hide Modal</Text>
                    <View style={styles.mContent}>
                        <TextInput
                            placeholder={'Hours Digit'}
                            placeholderTextColor={'#bfbfbf'}
                            placeholderStyle={styles.placeholderStyle}
                            underlineColorAndroid='transparent'
                            keyboardType={'numeric'}
                            value={this.props.hours}
                            style={styles.textInputStyle}
                            onChangeText={this.props.onChangeHrs}
                        />
                        <TextInput
                            placeholder={'Minutes Digit'}
                            placeholderTextColor={'#bfbfbf'}
                            placeholderStyle={styles.placeholderStyle}
                            underlineColorAndroid='transparent'
                            keyboardType={'numeric'}
                            value={this.props.minutes}
                            style={styles.textInputStyle}
                            onChangeText={this.props.onChangeMins}
                        />
                    </View>
                </KeyboardAvoidingView>
            </RNModal>
        );
    }
}

const styles = StyleSheet.create({
    hideText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'right'
    },
    mContainer: {
        position: 'absolute',
        height: 105,
        width: width,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    mContent: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 15,
    },
    textInputStyle: {
        marginHorizontal: 15,
        flex: 1,
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
        borderColor: '#6f6f6f',
        borderWidth: 0.5,
        backgroundColor: '#f5f5f5',
    }
})

