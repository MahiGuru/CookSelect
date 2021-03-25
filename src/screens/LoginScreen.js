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

const LoginScreen = ({navigation}) => {
  const {credentials, setCredentials} = useContext(AppContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={styles.container}>
        <Headline style={styles.logo}>Cook Cuttr</Headline>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
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
          style={styles.loginBtn}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: 60,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    fontSize: 26,
    width: 150,
    height: 150,
    color: 'white',
    borderRadius: 100,
    fontWeight: 'bold',
    backgroundColor: '#ffab03',
    marginBottom: 30,
  },
  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#FFF',
    backgroundColor: '#444444',
  },
  loginText: {
    color: '#FFF',
  },
});
export default LoginScreen;
