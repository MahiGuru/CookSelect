import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Text,
  Title,
  Button,
  Card,
  Paragraph,
  Appbar,
  Badge
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const HeaderBar = ({name="choose", navigation}) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Appbar.Header style={{backgroundColor: '#ffab03'}}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={name} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <View style={{flexDirection: 'row', position: 'relative'}}>
        <Appbar.Action icon="cart-plus" onPress={() => {}} />
        <Badge style={{position: 'absolute', right: 0, top: 0}}>3</Badge>
      </View>
    </Appbar.Header>
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
export default HeaderBar;
