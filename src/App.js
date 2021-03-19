import * as React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Appbar  } from 'react-native-paper';
import {
  Text,
  Title,
  Button,
  List,
  Avatar,
  Badge,
  Divider,
} from 'react-native-paper';

import LocationCard from './components/Location';
import DatePickerCard from './components/DatePickerCard';
import CookCard from './components/CookCard';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({navigation}) {
  const [location, setLocation] = React.useState({});
  const [zipcode, setZipcode] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [location]);
  return (
    <SafeAreaView style={styles.body}>
     
      <ImageBackground
        source={require('../assets/wallpaper1.jpg')}
        style={styles.backgroungImage}></ImageBackground>
      <View style={styles.container}>
        <View style={styles.item}>
          <Title
            style={{
              textAlign: 'center',
              padding: 10,
              alignContent: 'flex-start',
            }}>
            Cook Cuttr
          </Title>
          <LocationCard />
          <DatePickerCard />
        </View>
      </View>
      <Button
        style={styles.nextBtnStyle}
        raised
        theme={{roundness: 25}}
        mode="contained"
        onPress={() => navigation.push('receipes', {itemId: 86})}>
        Next
      </Button>
    </SafeAreaView>
  );
}
function CookSelectScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flexDirection: 'column'}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Choose Recipes"  /> 
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="cart-plus" onPress={() => {}} />
      </Appbar.Header>
      <CookCard activeColor="green" image="30" />
      <Divider />
      <CookCard activeColor="green" image="32" />
    </View>
  );
}

function ReceipeSelectScreen({route, navigation}) {
  React.useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const {itemId, otherParam} = route.params;
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Choose Recipes"  /> 
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="cart-plus" onPress={() => {}} />
      </Appbar.Header>
      <View style={{flexDirection: 'column'}}>
        <CookCard activeColor="red" image="12" />
        <Divider />
        <CookCard activeColor="green" image="14" />
        <Divider />
        <CookCard activeColor="green" image="15" />
        <Divider />
        <CookCard activeColor="green" image="18" />
      </View>
      <Button
        style={styles.nextBtnStyle}
        raised
        theme={{roundness: 25}}
        mode="contained"
        onPress={() => navigation.push('cook-select', {itemId: 86})}>
        Next
      </Button>
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
              options={{headerShown: true}}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="cook-select"
          component={CookSelectScreen}
          options={{title: 'Choose Cooks', headerShown: false}}
        />
        <Stack.Screen
          name="receipes"
          component={ReceipeSelectScreen}
          options={{title: 'Select Receipes', headerShown: false}}
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
  },
  item: {
    width: '100%', // is 50% of container width
  },
});
export default App;
