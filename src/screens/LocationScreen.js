import * as React from 'react';
import {View, ImageBackground, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'; 
import { 
  Button, 
  Headline, 
  Text
} from 'react-native-paper';

import LocationCard from '../components/Location';
import DatePickerCard from '../components/DatePickerCard'; 
import { AppContext } from '../context/AppContext';
import {commonStyles} from '../../styles';
import { useTheme } from 'react-native-paper'; 
import HeaderBar from '../components/HeaderBar'

const LocationScreen = ({navigation}) => { 
    const {credentials, locations, setLocations, setDate} = React.useContext(AppContext);
    const {colors} = useTheme();
    React.useEffect(() => {
      navigation.setOptions({headerShown: false}); 
    }, [locations]); 
    return (
      <SafeAreaView style={styles.container}>  
        <ImageBackground
          source={require('../../assets/wallpaper1.jpg')}
          style={commonStyles.backgroungImage}></ImageBackground>
          <Headline style={{...commonStyles.logo, backgroundColor: colors.primary}}>Cook Cuttr</Headline>
        <View style={styles.container}>
          <View style={styles.item}>
            <LocationCard onAction={(val) => setLocations(val) } />
            <DatePickerCard  onAction={(val) => setDate(val) }/>
          </View>
        </View> 
        
        <TouchableOpacity style={{...commonStyles.nextBtnStyle, backgroundColor: colors.buttonColor}} onPress={() => { 
            return navigation.push('receipes', {itemId: 86})
          }}>
          <Text style={{...commonStyles.block, color: colors.white}}>NEXT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({ 
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
  });
export default LocationScreen;
