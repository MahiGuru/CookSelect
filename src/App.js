import * as React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, Title, Button, List, Avatar, Badge, Divider} from 'react-native-paper';

import LocationCard from './components/Location';
import DatePickerCard from './components/DatePickerCard';

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
      {/* <View > */}

      <View style={styles.container}>
        <View style={styles.item}>
          <Title style={{textAlign: 'center', padding: 20}}>Cook Cuttr</Title>
          <LocationCard />
          <DatePickerCard />
        </View>
      </View>

      <Button
        style={{
          width: '100%',
          padding: 15,
          alignSelf: 'flex-end',
          backgroundColor: 'purple',
        }}
        raised
        theme={{roundness: 25}}
        mode="contained"
        onPress={() =>
          navigation.push('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }>
        Next
      </Button>
    </SafeAreaView>
  );
}
function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1}}>
      {/* <Text>Details Screen </Text>
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
      /> */}

      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>  */}
      <List.Item
        title="Philip Marge" 
        descriptionNumberOfLines={12}
        descriptionEllipsizeMode='middle'
        description={props => (
          <View > 
            <Text>Extra info here Extra info hereExtra info hereExtra info hereExtra info hereExtra info here....</Text>  
            <View style={{flex: 1, flexDirection:'row', flexWrap:'wrap', marginBottom: 30}}>
              <Badge>Chinese</Badge>
              <Badge>Southern</Badge>
              <Badge>Indo</Badge><Badge>Chinese</Badge>
              <Badge>Southern</Badge>
              <Badge>Indo</Badge>  
            </View> 
          </View>
        )}
        left={props => (
          <Avatar.Image
            size={80}
            source={require('../assets/wallpaper2.jpg')}
          />
        )}
        right={props => (
          <Button
            style={{alignSelf: 'center', justifyContent: 'center', height: 40}}
            theme={{roundness: 25}}
            mode="contained">
            Book now
          </Button>
        )}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => (
          <Avatar.Image
            size={80}
            source={require('../assets/wallpaper2.jpg')}
          />
        )}
        right={props => (
          <Button
            style={{alignSelf: 'center', justifyContent: 'center', height: 40}}
            theme={{roundness: 25}}
            mode="contained">
            Book now
          </Button>
        )}
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
              options={{headerShown: true}}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Choose Cooks'}}
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
