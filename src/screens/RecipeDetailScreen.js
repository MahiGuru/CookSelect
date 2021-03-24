import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Appbar, Subheading, List} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecipeDetailScreen = ({route, navigation, title}) => {
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
          <View>
            <Text>{data.name}</Text>
          </View>
        </View>
        <View style={{padding:10}}>
          <Subheading
            onPress={() => setShowIngrediants(!showIngrediants)}
            style={{justifyContent: 'flex-end'}}>
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
            </List.Section>
          ) : null}
        </View>
        <View style={{flexDirection: 'row', padding:10, justifyContent:'space-around'}}>
            <Text>Cooking duration: </Text>
            <Text> 50mins</Text>
        </View>
        <View style={{flexDirection: 'row', padding:10, justifyContent:'space-around'}}>
            <Text>Procedure: </Text>
            <Text> 222</Text>
        </View>
        <View style={{flexDirection: 'row', padding:10, justifyContent:'space-around'}}>
            <Text>Cooking duration: </Text>
            <Text> 50mins</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default RecipeDetailScreen;
