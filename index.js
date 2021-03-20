/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native'; 
import {name as appName} from './app.json';
import { DefaultTheme,  Provider as PaperProvider } from 'react-native-paper'; 
import App from './src/App';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#333'
  },
};

  export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
