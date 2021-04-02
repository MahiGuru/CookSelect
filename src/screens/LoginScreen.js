import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Divider, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../context/AppContext';
import { useTheme } from 'react-native-paper'; 
import {commonStyles} from '../../styles';

const LoginScreen = ({navigation}) => {
  const {credentials, setCredentials} = useContext(AppContext)
  const {colors} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log("LOGINNNN >>>> ", colors);
  return (
      <View style={commonStyles.container}>
        <Headline style={{...commonStyles.logo, backgroundColor: colors.primary}}>Cook Cuttr</Headline>
        <View style={commonStyles.inputView}>
          <TextInput
            style={commonStyles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={commonStyles.inputView}>
          <TextInput
            style={commonStyles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <Divider />
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Text>
              <Icon
                name="google"
                size={48}
                onPress={() => console.log('google')}></Icon>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Text>
              <Icon
                name="facebook-official"
                size={48}
                onPress={() => console.log('facebook')}></Icon>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Text>
              <Icon
                name="twitter"
                size={48}
                onPress={() => console.log('Twitter')}></Icon>
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{...commonStyles.buttons, backgroundColor: colors.buttonColor}}
          onPress={() => {
            setCredentials({email, password});
            console.log("credentials --- ", credentials);
            return navigation.push('Location', {itemId: 86})
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
  
  image: {
    marginBottom: 40,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginText: {
    color: '#FFF',
  },
});
export default LoginScreen;
