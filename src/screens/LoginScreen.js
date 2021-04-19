import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Divider, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';
import {useTheme} from 'react-native-paper';
import {commonStyles} from '../../styles';
import Auth0 from 'react-native-auth0';
import {useSelector, useDispatch} from 'react-redux';
import {login, getUserProfile, logout} from '../redux/actions/loginActions';

const LoginScreen = ({navigation}) => {
  const {credentials, setCredentials} = useContext(AppContext);
  const dispatch = useDispatch();

  const {colors} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector(state => state.user.authenticate);
  const loading = useSelector(state => state.user.loading);
  // console.log("ROOT - USERS CALLEDD....", users);
  // console.log("ROOT - LOADING ", loading);
  useEffect(() => {
    // return () => {
    console.log('USERS CALLEDD....', users);
    console.log('LOADING ', loading);
    if (users && users.accessToken) {
      navigation.push('Location', {itemId: 86});
      // dispatch(getUserProfile(users[0].accessToken))
    }
    // };
  }, [users, loading, navigation]);
  return (
    <View style={[commonStyles.container]}>
      {loading ? (
        <View style={[commonStyles.overlay, commonStyles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : null}
      <Headline style={{...commonStyles.logo, backgroundColor: colors.primary}}>
        Cook Cuttr
      </Headline>
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
              onPress={() => console.log('google')}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
          <Text>
            <Icon
              name="facebook-official"
              size={48}
              onPress={() => console.log('facebook')}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
          <Text>
            <Icon
              name="twitter"
              size={48}
              onPress={() => console.log('Twitter')}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{...commonStyles.buttons, backgroundColor: colors.buttonColor}}
        onPress={() => {
          setCredentials({email, password});
          console.log('credentials --- ', credentials);
          // return navigation.push('Location', {itemId: 86});
          dispatch(login());
          // auth0
          //   .webAuth
          //   .authorize({scope: 'openid profile email'})
          //   .then(credentials => {
          //       // Successfully authenticated
          //       // Store the accessToken
          //         console.log(credentials)
          //         auth0.auth
          //               .userInfo({token: credentials.accessToken})
          //               .then(res => console.log(res))
          //               .catch(err => console.error(err));

          //   }).catch(error => console.log(error));
        }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          //  return auth0.webAuth.clearSession().catch(error => console.log(error));
          dispatch(logout());
        }}
        style={{padding: 20}}>
        <Text>Logout</Text>
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
