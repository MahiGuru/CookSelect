import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Divider} from 'react-native-paper';

import CookCard from '../components/CookCard';
import HeaderBar from '../components/HeaderBar';
const cooks = [
  {
    name: 'Mahipal Gurjala',
    isFavorite: true,
    imagePath: '32',
    ratings: 2,
    isActive: true,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Philip Browt',
    isFavorite: true,
    imagePath: '34',
    ratings: 2,
    isActive: false,
    isAvailable: false,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Margaret Vansom',
    isFavorite: true,
    imagePath: '41',
    ratings: 2,
    isActive: true,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Jeopard Venus',
    isFavorite: true,
    imagePath: '45',
    ratings: 2,
    isActive: false,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Alen Wastro',
    isFavorite: true,
    imagePath: '48',
    ratings: 2,
    isActive: true,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Mike Philip',
    isFavorite: true,
    imagePath: '52',
    ratings: 2,
    isActive: true,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
  {
    name: 'Jane Waristo',
    isFavorite: true,
    imagePath: '56',
    ratings: 2,
    isActive: false,
    isAvailable: true,
    specialities: ['chinese', 'indian', 'mexican', 'pizza', 'burger'],
  },
];

const CookScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  
  const gotoDetailPage = data => {
    // e.stopPropagation();
    console.log('it pressed', data);
    return navigation.push('cook-details', {data});
  };
  return (
    <View style={{flexDirection: 'column'}}>
      <HeaderBar navigation={navigation} name="Choose Cooks"  />
      <ScrollView>
        {cooks.map((val, index) => (
          <CookCard
            key={index}
            title={val.name}
            specialities = {val.specialities}
            ratings={val.ratings}
            active={val.isActive}
            isAvailable={val.isAvailable}
            image={val.imagePath}
            cookClicked = {() => gotoDetailPage(val)}
            bookBtnClicked = {() => navigation.push('payments', {})}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CookScreen;
