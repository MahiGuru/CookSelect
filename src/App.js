import * as React from 'react';
import {View, StyleSheet, ImageBackground, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Surface, Text, Title, Headline} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import { TextInput, TextInputMask } from 'react-native-paper';


function HomeScreen({navigation}) {
  const [location, setLocation] = React.useState({});
  const [zipcode, setZipcode] = React.useState('');
  React.useEffect(() => {
    navigation.setOptions({headerShown: false});
    // if(!location.longitude && !location.lattitude){
      getPosition();
    // }
  }, [navigation]);

  const getPosition = () => { 
    console.log("get position");
    Geolocation.getCurrentPosition(
      position => { 
        console.log("get position", position);
        setLocation(position.coords);
      },
      error => {
        Alert.alert('Errorooooooor')
        setLocation({});
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    ); 
  }
  return (
    <View style={styles.body}>
      <ImageBackground
        source={require('../assets/wallpaper1.jpg')}
        style={styles.backgroungImage}></ImageBackground>
      {/* <View > */}
      <View style={{width:'90%', flex: 1, justifyContent:'center', margin:25}}>
      <TextInput style={{width:'100%'}}
        label="Zipcode"
        value={zipcode}
        
        onChangeText={zipcode => setZipcode(zipcode)}
      />
      <View style={{flex: 1, justifyContent:'flex-start', flexDirection:'row', padding:10}}>
        <Text style={{flex:1}}> Longitude : {location.longitude}</Text>
        <Text style={{flex:1}}>Latitude : {location.latitude}</Text>
      </View>
      <Button 
        raised
        theme={{roundness: 25}}
        mode="contained"
        onPress={ getPosition }>
        Get Position
      </Button>
      
      </View>
      <Button
        icon="camera"
        raised
        theme={{roundness: 25}}
        mode="outlined"
        onPress={() =>
          navigation.push('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }>
        Press me
      </Button>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.push('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Surface style={styles.surface}>
        <Headline>CookCuttr</Headline>
      </Surface>
      {/* </View> */}
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen </Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        raised
        theme={{roundness: 3}}
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
        <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props}
              extraData={{title: 'Home Screen Touch'}}
              options={{headerShown: false}}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details Screen 123'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
});
export default App;
