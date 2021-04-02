import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Appbar, Subheading, List, Button} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderBar from '../components/HeaderBar';
import { WebView } from 'react-native-webview';

const RecipeDetailScreen = ({route, navigation, title}) => {
  React.useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const {recipe} = route.params;
  const [showIngrediants, setShowIngrediants] = React.useState(false);
  const [showInstructions, setShowInstructions] = React.useState(true);
  const ingredientNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17,18,19,20];
  console.log('inside recipe ', recipe);
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <HeaderBar navigation={navigation} name={recipe.strMeal} />
      <ScrollView>
        <View style={{flexDirection: 'row', padding: 20}}>
          <FastImage
            style={{width: 100, height: 100, margin: 10, borderRadius: 10}}
            source={{
              uri: recipe.strMealThumb,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>{recipe.strMeal}</Text>
          </View>
        </View>
        <View style={{padding:10}}>
          <Subheading
            onPress={() => setShowIngrediants(!showIngrediants)}
            style={{justifyContent: 'flex-end', fontSize: 18, fontWeight:'bold'}}>
            <MaterialIcons
              name={
                showIngrediants ? 'keyboard-arrow-down' : 'keyboard-arrow-right'
              }
              size={18}
            />{' '}
            Ingrediants:
          </Subheading>
          {showIngrediants ? (
            <List.Section>
              {ingredientNums.map((val, i) => recipe['strIngredient'+val] ? <List.Item key={i} title={recipe['strIngredient'+val] } /> : null )} 
            </List.Section>
          ) : null}

          <Subheading
            onPress={() => setShowInstructions(!showInstructions)}
            style={{justifyContent: 'flex-end', fontSize: 18, fontWeight:'bold'}}>
            <MaterialIcons
              name={
                showInstructions ? 'keyboard-arrow-down' : 'keyboard-arrow-right'
              }
              size={18}
            />{' '}
            Instructions:
          </Subheading>
          {showInstructions ? (
            <View style={{paddingLeft:20}}>
               <Text>{recipe.strInstructions}</Text>
            </View>
          ) : null}
        </View>
        <Subheading style={{justifyContent: 'flex-end', padding: 20, paddingBottom: 0, fontSize: 18, fontWeight:'bold'}}>
            Youtube Link: 
          </Subheading>
        <Button mode="text" onPress={() => (
          <WebView
            source={{ uri: recipe.strYoutube }}
            style={{ marginTop: 20 }}
          />
          )}>
            {recipe.strYoutube}
        </Button>
        
      </ScrollView>
    </View>
  );
};

export default RecipeDetailScreen;
