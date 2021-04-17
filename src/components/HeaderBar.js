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
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { login, getUserProfile, logout } from '../redux/actions/loginActions'; 



const HeaderBar = ({name="choose", navigation}) => {
  const [date, setDate] = React.useState(new Date());

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.authenticate); 
  React.useEffect(() => {
    console.log('FROM HEADERS ==== ', users);
    return () => {
        console.log("HEADER USERS CALLEDD....", users); 
        if(users) {
          console.log("headersss >>>> ", users);
          dispatch(getUserProfile(users.accessToken))
        }
    };
  }, [users]); 
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
