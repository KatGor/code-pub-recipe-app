import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import LikedRecipeCard from '../components/LikedRecipeCard';

export default function LikedRecipes() {
  const likedRecipes = useSelector((state) => state);
  return (
    <ScrollView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.uri}
        data={likedRecipes}
        renderItem={({ item }) => <LikedRecipeCard recipe={item} />}
      />
    </ScrollView>
  );
}

LikedRecipes.navigationOptions = {
  title: 'Recipe Book',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
