import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';

import RecipeScreen from './screens/RecipeScreen';
import CookScreen from './screens/CookScreen';
import LocationScreen from './screens/LocationScreen';
import LoginScreen from './screens/LoginScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import CookDetailScreen from './screens/CookDetailScreen';
import {AppContext} from './context/AppContext';
import store from './redux/store' 
import PaymentScreen from './screens/PaymentScreen';
import { DefaultTheme,  Provider as PaperProvider } from 'react-native-paper'; 

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffab03',
    buttonColor: '#333',
    white: '#FFFFFF',
    inputBgColor: '#f5f5f5',
    accent: '#f1c40f',
  },
};

const Stack = createStackNavigator();

function App() {
  const [credentials, setCredentials] = React.useState({});
  const [locations, setLocations] = React.useState({});
  const [date, setDate] = React.useState(null);
  const [recipes, setRecipes] = React.useState({});
  const [selectedCook, setSelectedCook] = React.useState({});
  const data = {
    credentials,
    setCredentials,
    locations,
    setLocations,
    date,
    setDate,
    recipes,
    setRecipes,
    selectedCook,
    setSelectedCook,
  };
  return (
    <StoreProvider store={store}>
      <AppContext.Provider value={data}>
        
    <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Choose Cooks', headerShown: false}}
            />
            <Stack.Screen name="Location">
              {props => (
                <LocationScreen
                  {...props}
                  extraData={{title: 'Home Screen Touch'}}
                  options={{headerShown: true}}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="receipes"
              component={RecipeScreen}
              options={{title: 'Select Receipes', headerShown: false}}
            />
            <Stack.Screen
              name="recipe-detail"
              component={RecipeDetailScreen}
              options={{title: 'Recipe Details', headerShown: false}}
            />
            <Stack.Screen
              name="cook-select"
              component={CookScreen}
              options={{title: 'Choose Cooks', headerShown: false}}
            />
            <Stack.Screen
              name="cook-details"
              component={CookDetailScreen}
              options={{title: 'Choose Cooks', headerShown: false}}
            />
            
            <Stack.Screen
              name="payments"
              component={PaymentScreen}
              options={{title: 'Make Payment', headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
      </AppContext.Provider>
    </StoreProvider>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnStyle: {
    width: '100%',
    padding: 5,
    margin: 5,
    backgroundColor: 'purple',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
  },
  backgroungImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  item: {
    width: '100%', // is 50% of container width
  },
});
export default App;
