import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {TextInput, Button, Card} from 'react-native-paper';

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
        <Card>
          <Card.Content>
            <Text>Longitude : {location.longitude}</Text>
            <Text>Latitude : {location.latitude}</Text>
            <TextInput
              style={{width: '100%'}}
              label="Zipcode"
              value={zipcode}
              onChangeText={zipcode => setZipcode(zipcode)}
            />
          </Card.Content>

          <Card.Actions>
            <Button
              style={{flex: 1}}
              raised
              theme={{roundness: 25}}
              mode="contained"
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
  item: {
    width: '50%', // is 50% of container width
    flex: 1,
    flexDirection: 'column'
  },
});
export default LocationCard;
