import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Appbar, theme} from 'react-native-paper';
import {useTheme, Button, Divider, Badge} from 'react-native-paper';

import RecipeCard from '../components/RecipeCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../context/AppContext';

const RecipeScreen = ({route, navigation, theme}) => {
  const {credentials, locations, date} = React.useContext(AppContext);
  
  React.useEffect(() => {
    navigation.setOptions({headerShown: false}); 
    console.log("Recipe Credentials ", credentials);
    console.log("Recipe Locations ", locations);
    console.log("Recipe Date ", date);
  }, [navigation]);
  
  const gotoDetailPage = data => {
    // e.stopPropagation();
    console.log('it pressed', data);
    return navigation.push('recipe-detail', {data});
  };

  const {itemId, otherParam} = route.params;
  const recipes = [
    {
      name: 'Greek Chicken Skewers',
      isFavorite: true,
      imagePath: '22'
    },
    {
      name: 'Chicken Tikka',
      isFavorite: true,
      imagePath: '24'
    },
    {
      name: 'Paneer Carew Wam',
      isFavorite: true,
      imagePath: '25'
    },
    {
      name: 'Veg Biryani',
      isFavorite: true,
      imagePath: '26'
    },
    {
      name: 'Chicken Biryani',
      isFavorite: true,
      imagePath: '27'
    }
]

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <Appbar.Header style={{backgroundColor: '#ffab03'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Choose Recipes" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <View style={{flexDirection: 'row', position: 'relative'}}>
          <Appbar.Action icon="cart-plus" onPress={() => {}} />
          <Badge style={{position: 'absolute', right: 0, top: 0}}>3</Badge>
        </View>
      </Appbar.Header>
      <ScrollView>
        <View style={{flexDirection: 'column'}}>
          {
            recipes.map((data, i) => (
              <RecipeCard
                key = {i}
                title={data.name}
                favorite={data.isFavorite}
                activeColor="red"
                image={data.imagePath}
                cardClicked={() => gotoDetailPage(data)}
              />
            ))
          }
          {/* <RecipeCard
            title="Greek Chicken Skewers"
            favorite={true}
            activeColor="red"
            image="22"
            cardClicked={() => gotoDetailPage()}
          />
          <Divider />
          <RecipeCard
            title="Chicken Tikka"
            favorite={true}
            activeColor="green"
            image="24"
          />
          <Divider />
          <RecipeCard
            title="Paneer Carew Wam"
            favorite={false}
            activeColor="green"
            image="25"
          />
          <Divider />
          <RecipeCard
            title="Veg Biryani"
            favorite={true}
            activeColor="green"
            image="28"
          /> */}
        </View>
      </ScrollView>
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
};

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
