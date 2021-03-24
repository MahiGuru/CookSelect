import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Text,
  Title,
  Button,
  List,
  Avatar,
  Badge,
  Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

const CookCard = ({title, active, image, specialities, isAvailable, cookClicked}) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <List.Item
      title={title}
      onPress={(e) => cookClicked(e)}
      description={props => (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={16} color="green" />
            <Icon name="star" size={16} color="green" />
            <Icon name="star-half" size={16} color="green" />
            <Icon name="star-o" size={16} color="grey" />
            <Icon name="star-o" size={16} color="grey" />
          </View>
          <Text>Specialities</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                specialities.map((specials, i) => (
                    <Badge key={'specials_'+i}>{specials}</Badge> 
                ))
              }
          </View>
          
        </View>
      )}
      left={props => (
        <View>
          <FastImage
            style={{width: 80, height: 80, margin: 10, borderRadius: 10}}
            source={{
              uri: 'https://unsplash.it/400/400?users,image='+image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      )}
      right={props => (
        <View style={{flexDirection: 'column', justifyContent:'center'}}>
          <Button
            style={{alignSelf: 'center', justifyContent: 'center'}}
            theme={{roundness: 25}}
            mode="contained">
            Book now
          </Button>
          <Text style={{textAlign: 'center'}}> <Icon name={isAvailable ? "check" : "close"} size={16} color={isAvailable ? "green": 'red'} /> 
              {isAvailable ? 'Available to cook': 'Not Available'}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Icon name="dot-circle-o" size={16} color={active ? 'green': 'red'} /> {active ? 'Active' : 'Inactive'}
          </Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'red',
  },
});
export default CookCard;
