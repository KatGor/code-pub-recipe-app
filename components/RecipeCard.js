import React from 'react';
import {StyleSheet, Dimensions, Image, View, Text} from "react-native";

const {height, width} = Dimensions.get('window');

export default function RecipeCard({pic, title}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: pic}} style={styles.imageContainer} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: width - 30,
    height: height - 29 * 6,
    borderRadius: 20,
    overflow: 'hidden', // this does magic
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 30,
    backgroundColor: "white",
    width: width - 30
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
});