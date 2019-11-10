import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-deck-swiper';
import { useDispatch } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import { addRecipe } from '../redux/actions';
import OverlayIcon from '../components/OverlayIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlayIcon: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
});

const fetchRecipes = async () => axios.get('https://api.edamam.com/search?q=breakfast&app_id=e34438de&app_key=084c9e3bb17fbcad9dc37e0422aa0069');

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetchRecipes();
      const fetchedRecipes = response.data.hits;
      setRecipes(fetchedRecipes);
    };
    getRecipes();
  }, []);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Swiper
        cards={recipes}
        renderCard={(hit) => (hit ? <RecipeCard pic={hit.recipe.image} title={hit.recipe.label} /> : null)}
        infinite // keep looping cards infinitely
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2} // number of cards shown in background
        onSwipedRight={(i) => dispatch(addRecipe(recipes[i].recipe))}
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <OverlayIcon label="NOPE" color="#E5566D" />,
            style: {
              wrapper: styles.overlayIcon,
            },
          },
          right: {
            title: 'LIKE',
            element: <OverlayIcon label="LIKE" color="#4CCC93" />,
            style: {
              wrapper: {
                ...styles.overlayIcon,
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
