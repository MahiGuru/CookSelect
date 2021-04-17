import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Text,
  Title,
  Button,
  Card,
  Paragraph
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

const ReviewCard = ({name}) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Card> 
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>I really like the food which was prepared for my event by Patric</Paragraph>
      </Card.Content>
      {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
      <Card.Actions>
      <View style={{flexDirection: 'row'}}>
        <Icon name="star" size={16} color="green" />
        <Icon name="star" size={16} color="green" />
        <Icon name="star-half" size={16} color="green" />
        <Icon name="star-o" size={16} color="grey" />
        <Icon name="star-o" size={16} color="grey" />
      </View>
      <View> 
          <Button icon="heart" mode="text" color={"red"}>  </Button>
      </View>
      </Card.Actions>
    </Card>
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
export default ReviewCard;
