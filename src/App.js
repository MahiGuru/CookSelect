import * as React from 'react';
import { View, StyleSheet, ImageBackground  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Surface, Text, Title, Headline  } from 'react-native-paper';
import { Button } from 'react-native-paper';


function HomeScreen({navigation }) {
  React.useEffect(() => {
   navigation.setOptions({ headerShown: false })
  }, [navigation]);
  
  return (
    <View style={styles.body}>

      <ImageBackground source={require('../assets/wallpaper1.jpg')} style={styles.backgroungImage}>  
      </ImageBackground>
      {/* <View > */}
          <Text>Home Screen</Text>
          
          <Button icon="camera" raised theme={{ roundness: 25 }} mode="outlined" onPress={() => navigation.push('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}>
            Press me
          </Button>
          <Button 
            title="Go to Details"
            onPress={() => navigation.push('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
          />
          <Surface style={styles.surface}>
          <Headline>CookCuttr</Headline>
          </Surface> 
          {/* </View> */}
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen </Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button  raised theme={{ roundness: 3 }}
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" >
            {props => <HomeScreen {...props} extraData={{title:"Home Screen Touch"}} options={{ headerShown: false }} />}  
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Screen 123' }} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  surface: {
    padding: 5,
    height: 150,
    width: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  backgroungImage: {
    position: 'absolute',
    top: 0, 
    left: 0,
    width:'100%',
    height: '100%',
    opacity: 0.2
  },
});
export default App;