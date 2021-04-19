/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import RecipeCard from '../components/RecipeCard';
import {AppContext} from '../context/AppContext';
import {useSelector, useDispatch} from 'react-redux';

import {getRecipesList} from '../redux/actions/recipeActions';
import HeaderBar from '../components/HeaderBar';

const RecipeScreen = ({navigation}) => {
  const loadRecipes = () => {
    console.log('LOAD RECIPES >>>>>>');
    dispatch(getRecipesList());
  };
  let recipeList = [];
  recipeList = useSelector(state => state.recipes.recipes);

  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log('RECIPE USEEFFECTSSSSSS ');
    navigation.setOptions({headerShown: false});
    loadRecipes();
  }, [navigation]);

  const gotoDetailPage = data => {
    console.log('it pressed', data);
    return navigation.push('recipe-detail', {recipe: data});
  };

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <HeaderBar navigation={navigation} name="Choose Recipes" />
      <ScrollView>
        <View style={{flexDirection: 'column'}}>
          {recipeList &&
            recipeList.map((data, i) => (
              <RecipeCard
                key={i}
                recipe={data}
                favorite={data.isFavorite}
                cardClicked={() => gotoDetailPage(data)}
              />
            ))}
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
