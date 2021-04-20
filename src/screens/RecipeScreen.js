/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, Text, 
  ActivityIndicator } from 'react-native';
import {Button} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import RecipeCard from '../components/RecipeCard';
import {AppContext} from '../context/AppContext';
import {useSelector, useDispatch} from 'react-redux';
import { useTheme } from 'react-native-paper'; 

import {getRecipesList} from '../redux/actions/recipeActions';
import HeaderBar from '../components/HeaderBar';
import {commonStyles} from '../../styles';

const RecipeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const recipp = useSelector(state => state);
  console.log("RECIPPPPPPPPPP >>>>> ", recipp);
  const loading = useSelector(state => state.recipes.loading); 
  console.log("RECIPESSS LOADING ", loading);
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
    return navigation.push('recipe-detail', {recipe: data});
  };

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <HeaderBar navigation={navigation} name="Choose Recipes" />
        
      {loading ? (
        <View style={[commonStyles.overlay, commonStyles.container]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
        ) : null}
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
      
      <TouchableOpacity style={{...commonStyles.nextBtnStyle, backgroundColor: colors.buttonColor}} onPress={() => { 
            return navigation.push('cook-select', {itemId: 86})
          }}>
          <Text style={{...commonStyles.block, color: colors.white}}>NEXT</Text>
        </TouchableOpacity>
      
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
    color:'#FFF'
  },
});
export default RecipeScreen;
