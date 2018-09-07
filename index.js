import { AppRegistry, YellowBox } from 'react-native';
import App from './App';


YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup'
]);

AppRegistry.registerComponent('DynamicHeightTextInput', () => App);
