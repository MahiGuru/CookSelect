/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native'; 
import {name as appName} from './app.json';
import App from './src/App';

  export default function Main() {
  return (
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  );
}

AppRegistry.registerComponent(appName, () => App);
