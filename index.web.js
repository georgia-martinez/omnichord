import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('omnichord', () => App);
AppRegistry.runApplication('omnichord', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

