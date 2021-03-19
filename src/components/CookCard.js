import * as React from 'react';
import {View} from 'react-native';
import {Text, Title, Button, List, Avatar, Badge, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const CookCard = ({activeColor}) => {
  const [date, setDate] = React.useState(new Date())
  
  return (
    <List.Item
        title="Mahipal Gurjala"
        description={ props => (
            <View>
                <View  style={{flexDirection:"row"}}>
                    <Icon name="star" size={16} color="green" />
                    <Icon name="star" size={16} color="green" />
                    <Icon name="star-half" size={16} color="green" />
                    <Icon name="star-o" size={16} color="grey" />
                    <Icon name="star-o" size={16} color="grey" />
                </View>
                <Text>Specialities</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Badge>Chinese</Badge>
                    <Badge>Southern</Badge>
                    <Badge>Indo</Badge>
                    <Badge>Southern</Badge> 
                    <Badge>Indo</Badge>
                    <Badge>Southern</Badge> 
                </View>
            </View>
        )}
        left={props => (
          <Avatar.Image
            size={80}
            source={{uri: 'https://i.picsum.photos/id/870/200/300.jpg?blur=2'}}
          />
        )}
        right={props => (
          <View>
            <Button
                style={{alignSelf: 'center', justifyContent: 'center'}}
                theme={{roundness: 25}}
                mode="contained">
                Book now
            </Button>
            <Text style={{textAlign: 'center'}}>Available to cook</Text>
            <Text style={{textAlign: 'center', justifyContent:'center', alignContent:'center'}}>
                <Icon name="dot-circle-o" size={16} color={activeColor} /> Active</Text>
            
          </View>
        )}
      />
  );
};

export default CookCard;
