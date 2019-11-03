import React from 'react';
import {
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';

export default function LikedRecipeCard({ recipe }) {
  const navigateToImage = () => {
    Linking.openURL(recipe.url);
  };
  return (
    <TouchableOpacity onPress={navigateToImage}>
      <Card
        featuredTitle={recipe.label}
        image={{ uri: recipe.image }}
      >
        <Text style={{ marginBottom: 10 }}>
          {recipe.source}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}
