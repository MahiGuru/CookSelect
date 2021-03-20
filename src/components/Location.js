import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {TextInput, Button, Card, Headline} from 'react-native-paper';

const LocationCard = () => {
  React.useEffect(() => {
    // navigation.setOptions({headerShown: false});
    // if(!location.longitude && !location.lattitude){
    getPosition();
    // }
  }, [location]);

  const [location, setLocation] = React.useState({});
  const [zipcode, setZipcode] = React.useState('');

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('get position', position);
        setLocation(position.coords);
      },
      error => {
        Alert.alert('Errorooooooor');
        setLocation({});
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return ( 
      <View >
      <Headline style={{color: '#915d9e'}}>Where are you located?</Headline> 
        <Card>
          <Card.Content>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
            <Text>Longitude : {location.longitude}</Text>
            <Text>Latitude : {location.latitude}</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="" 
              />
            </View>
          </Card.Content>

          <Card.Actions>
            <Button
              style={{flex: 1}}
              raised
              theme={{roundness: 25}}
              mode="outlined"
              onPress={getPosition}>
              Get Position
            </Button>
          </Card.Actions>
        </Card>
      </View> 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  inputView: {
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    width: '100%',
    height: 45,
    marginBottom: 0, 
    alignItems: 'center',
  },

  TextInput: { 
    backgroundColor: '#f5f5f5', 
    width: '100%',
    height: 45,
    marginBottom: 20, 
    alignItems: 'flex-start',
  },
  item: {
    width: '50%', // is 50% of container width
    flex: 1,
    flexDirection: 'column'
  },
});
export default LocationCard;
