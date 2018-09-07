import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

let { height, width } = Dimensions.get('window');

const CommonStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },
    body: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    //pageHeader 
    headerStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInputView:{
        fontSize: 14,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingTop: 8,
        textAlign: 'left',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        shadowRadius: 1,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0.5,
            height: 1
        },
        shadowColor: '#ad9c9c',
        ...Platform.select({
            android: {
                borderTopColor: '#ad9c9c',
                borderTopWidth: StyleSheet.hairlineWidth,
            }
        }),
    }
});

module.exports = CommonStyle;
