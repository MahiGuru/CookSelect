import * as React from 'react';
import {View, ImageBackground, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'; 
import { 
  Button, 
  Headline, 
  Text
} from 'react-native-paper';

import LocationCard from '../components/Location';
import DatePickerCard from '../components/DatePickerCard'; 

const LocationScreen = ({navigation}) => { 
    const [location, setLocation] = React.useState({});
  
    React.useEffect(() => {
      navigation.setOptions({headerShown: false});
    }, [location]);
    return (
      <SafeAreaView style={styles.body}> 
        <ImageBackground
          source={require('../../assets/wallpaper1.jpg')}
          style={styles.backgroungImage}></ImageBackground>
          <Headline style={styles.logo}>Cook Cuttr</Headline>
        <View style={styles.container}>
          <View style={styles.item}>
            <LocationCard />
            <DatePickerCard />
          </View>
        </View> 
        
        <TouchableOpacity style={styles.btn} onPress={() => navigation.push('receipes', {itemId: 86})}>
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: { 
      padding:60, 
      paddingLeft: 0,
      paddingRight: 0,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent:'flex-end',  
      alignSelf:'center',
      fontSize: 26,
      width: 150,
      height: 150,
      color: 'white', 
      borderRadius: 100,
      fontWeight:'bold', backgroundColor: '#ffab03',
      marginBottom: 30
    },
    nextBtnStyle: {
      width: '100%',
      padding: 5,
      margin: 5,
      backgroundColor: 'purple',
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 10,
    },
    backgroungImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.2,
    },
    container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    },
    item: {
      width: '100%', // is 50% of container width
    },
    btn: {
      width: '90%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      color: '#FFF',
      backgroundColor: '#444444',
    },
    btnText: {
      color: '#FFF'
    }
  });
export default LocationScreen;
