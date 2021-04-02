import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Text,
  Title,
  Button,
  List,
  Avatar,
  Badge,
  Subheading,
  DataTable,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import FastImage from 'react-native-fast-image';

const RecipeCard = ({recipe, favorite, cardClicked}) => {
  const [date, setDate] = React.useState(new Date());
  const [showIngrediants, setShowIngrediants] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const ingredientNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17,18,19,20];

  React.useEffect(() => { 
    setIsFavorite(favorite); 
  }, [recipe]);
  
  return (
    <List.Item
      title={recipe.strMeal}
      onPress = {(e) => cardClicked(e)}
      description={props => (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Button 
              theme={{roundness: 25}}
              mode="outlined">
              Add 
            </Button>
            <Button icon="heart" mode="text" color={isFavorite? "red" : 'grey'} onPress={() => setIsFavorite(!isFavorite)}> 
            </Button> 
          </View>
          <Subheading>Level: <MaterialCommunityIcons name="cup"  size={18}/></Subheading>
          <Subheading onPress={() => setShowIngrediants(!showIngrediants)} style={{justifyContent:'flex-end'}}>
              <MaterialIcons name={showIngrediants ? "keyboard-arrow-down": "keyboard-arrow-right"} size={18} /> Ingrediants: 
          </Subheading>
          {showIngrediants ? <List.Section>
              {ingredientNums.map((val, i) => recipe['strIngredient'+val] ? <List.Item key={i} title={recipe['strIngredient'+val] } /> : null )} 
            </List.Section> : null }
        </View>
      )}
      left={props => (
        <View>
          <FastImage
            style={{width: 100, height: 100, margin: 10, borderRadius: 10}}
            source={{
              uri: recipe.strMealThumb,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      )}
      right={props => (
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
           
          <Text style={{textAlign: 'center'}}>Servings: 2-3 </Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'red',
  },
});
export default RecipeCard;
