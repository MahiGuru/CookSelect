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

const RecipeCard = ({title, favorite, activeColor, image, cardClicked}) => {
  const [date, setDate] = React.useState(new Date());
  const [showIngrediants, setShowIngrediants] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => { 
    setIsFavorite(favorite);
    console.log("FAVORITE ", isFavorite);
  }, [title]);
  
  return (
    <List.Item
      title={title}
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
            <List.Item title="¼ cup lemon juice" />
            <List.Item title="¼ cup wok oil" />
            <List.Item title="¼ cup red wine vinegar" />
            <List.Item title="1 tablespoon onion flakes" />
            <List.Item title="1 tablespoon minced garlic" />
            <List.Item title="1 lemon, zested" />
            <List.Item title="1 teaspoon Greek seasoning" />
            <List.Item title="1 teaspoon dried oregano" />
            <List.Item title="1 teaspoon ground black pepper" />
            <List.Item title="½ teaspoon dried thyme" />
            <List.Item title="3 skinless, boneless chicken breasts, or as needed, cut into 1-inch pieces" />
            <List.Item title="8 bamboo skewers, or as needed, soaked in water for 30 minutes" />
          </List.Section> : null }
        </View>
      )}
      left={props => (
        <View>
          <FastImage
            style={{width: 100, height: 100, margin: 10, borderRadius: 10}}
            source={{
              uri: 'https://unsplash.it/400/400?food,image=' + image,
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
