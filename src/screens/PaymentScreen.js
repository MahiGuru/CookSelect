import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';

const PaymentScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Appbar.Header style={{backgroundColor: '#ffab03'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Choose Payment" />
      </Appbar.Header>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CreditCardInput onChange={data => console.log(data)} />
      </View>
      <View>
        <Button
          style={styles.nextBtnStyle}
          raised
          theme={{roundness: 5}}
          mode="contained" >
          Confirm Payment
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
  nextBtnStyle: {
    width: '90%',
    padding: 5,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#333',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
export default PaymentScreen;
