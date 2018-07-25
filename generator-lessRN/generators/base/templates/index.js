import { AppRegistry } from 'react-native';
import App from '<%= appName %>/App';
import {name as appName} from '<%= appName %>/app.json';


AppRegistry.registerComponent(appName, () => App);