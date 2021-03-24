import * as React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
 
import RecipeScreen from './screens/RecipeScreen'; 
import CookScreen from './screens/CookScreen';
import LocationScreen from './screens/LocationScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login"
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
          name="cook-select"
          component={CookScreen}
          options={{title: 'Choose Cooks', headerShown: false}}
        />
        <Stack.Screen
          name="receipes"
          component={RecipeScreen}
          options={{title: 'Select Receipes', headerShown: false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default MainStackNavigator