import * as React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView, ScrollView} from 'react-native'; 
import { Appbar  } from 'react-native-paper';
import {  
  Divider,
} from 'react-native-paper';
 
import CookCard from '../components/CookCard';  

const CookScreen = ({route, navigation}) => {
    const {itemId, otherParam} = route.params;
    return (
        <View style={{flexDirection: 'column'}}>
        <Appbar.Header  style={{ backgroundColor: "#ffab03" }}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Choose Cook"  /> 
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon="cart-plus" onPress={() => {}} />
        </Appbar.Header>
        <ScrollView>
            <CookCard title="Mahipal Gurjala" activeColor="green" image="30" />
            <Divider />
            <CookCard title="Philip Browt" activeColor="green" image="36" />
            <Divider />
            <CookCard title="Margaret Vansom" activeColor="green" image="42" />
            <Divider />
            <CookCard title="Jeopard Venus" activeColor="green" image="43" />
            <Divider />
            <CookCard title="Alen Wastro" activeColor="green" image="44" />
            <Divider />
            <CookCard  title="Mike Philip" activeColor="green" image="45" />
            <Divider />
            <CookCard  title="Jane Waristo" activeColor="green" image="46" />
            <Divider />
            <CookCard activeColor="green" image="32" />
        </ScrollView>
        </View>
    );
}

export default CookScreen;
