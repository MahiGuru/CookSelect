import * as React from 'react';
import {
  View, 
  Text
} from 'react-native';
import {Appbar} from 'react-native-paper'; 
import { FormProvider, useForm } from 'react-hook-form'
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native'
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button, FormModel } from 'rn-credit-card'

const PaymentScreen = ({navigation}) => { 
  const formMethods = useForm({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  function onSubmit(model) {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2))
  }

  return ( 
       <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
         <Appbar.Header style={{backgroundColor: '#ffab03'}}>
              <Appbar.BackAction onPress={() => navigation.goBack()} />
              <Appbar.Content title="Choose Payment" />
          </Appbar.Header>
          <FormProvider {...formMethods}>
                <SafeAreaView style={styles.container}>
                  <KeyboardAvoidingView
                    style={styles.avoider}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  >
                    <CreditCardForm
                      LottieView={LottieView}
                      horizontalStart
                      overrides={{
                        labelText: {
                          marginTop: 16,
                        },
                      }}
                    />
                  </KeyboardAvoidingView>
                  {formState && formState.isValid && (
                    <Button
                      style={styles.button}
                      title={'CONFIRM PAYMENT'}
                      onPress={handleSubmit(onSubmit)}
                    />
                  )}
                </SafeAreaView>
              </FormProvider>
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
})
export default PaymentScreen;
