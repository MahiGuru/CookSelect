import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Appbar, Subheading, List, Avatar, Button, Card, Title, Paragraph, Headline } from 'react-native-paper';
import {Badge} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewCard from '../components/ReviewCard';
import Icon from 'react-native-vector-icons/FontAwesome';
const CookDetailScreen = ({route, navigation, title}) => {
  React.useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const {data} = route.params;
  const [showIngrediants, setShowIngrediants] = React.useState(false);
  console.log('inside data ', data);
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <Appbar.Header style={{backgroundColor: '#ffab03'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={data.name} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <View style={{flexDirection: 'row', position: 'relative'}}>
          <Appbar.Action icon="cart-plus" onPress={() => {}} />
          <Badge style={{position: 'absolute', right: 0, top: 0}}>3</Badge>
        </View>
      </Appbar.Header>
      <ScrollView>
        <View style={{flexDirection: 'row', padding: 20}}>
          <FastImage
            style={{width: 100, height: 100, margin: 10, borderRadius: 10}}
            source={{
              uri: 'https://unsplash.it/400/400?food,image=' + data.imagePath,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{flexDirection:'column', justifyContent:"center", alignContent:'center'}}>
            <Headline>{data.name}</Headline>
          </View>
        </View>
        <View style={{padding:10}}>
          <Subheading >
            Reviews:
          </Subheading>

          <ReviewCard name="Patric Wilson" />
           <ReviewCard name="Manhatten Philips" />
           <ReviewCard name="Sebastian Wourz" />
           <ReviewCard name="Amerf Patrio" />
        </View> 
        
      </ScrollView>
    </View>
  );
};

export default CookDetailScreen;
