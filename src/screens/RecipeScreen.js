import * as React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView, ScrollView} from 'react-native'; 
import { Appbar, theme  } from 'react-native-paper';
import { 
    useTheme ,
  Button, 
  Divider,
  Badge
} from 'react-native-paper';
 
import RecipeCard from '../components/RecipeCard'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const RecipeScreen = ({route, navigation, theme}) => {
    React.useEffect(() => {
        navigation.setOptions({headerShown: false});
        console.log(colors)
      }, [navigation]);
      const { colors } = useTheme();
      const {itemId, otherParam} = route.params;
      return (
        <View style={{flexDirection: 'column', flex: 1}}>
          <Appbar.Header  style={{ backgroundColor: "#ffab03" }}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Choose Recipes"  /> 
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <View style={{flexDirection: 'row', position:'relative'}}>
                <Appbar.Action icon="cart-plus" onPress={() => {}} />
                <Badge style={{position:'absolute', right:0, top:0}}>3</Badge>
            </View>
          </Appbar.Header>
          <ScrollView>
          <View style={{flexDirection: 'column'}}>
            <RecipeCard title="Greek Chicken Skewers" favorite={true} activeColor="red" image="22" />
            <Divider />
            <RecipeCard title="Chicken Tikka" favorite={true} activeColor="green" image="24" />
            <Divider />
            <RecipeCard title="Paneer Carew Wam" favorite={false} activeColor="green" image="25" />
            <Divider />
            <RecipeCard title="Veg Biryani" favorite={true} activeColor="green" image="28" />
          </View></ScrollView>
          <Button
            style={styles.nextBtnStyle}
            raised
            theme={{roundness: 5}}
            mode="contained"
            onPress={() => navigation.push('cook-select', {itemId: 86})}>
            Next
          </Button>
        </View>
      );
}

const styles = StyleSheet.create({ 
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
export default RecipeScreen;
