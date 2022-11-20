import { Text, View } from "react-native";
import Meal from "../models/meal";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { useLayoutEffect } from "react";

export type MealDetailsScreenProps = {
  data: Meal;
};

export default function MealDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "MealDetails">>();

  const { title, ingredients } = route.params.data;

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View>
      <Text>{title}</Text>

      {ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
    </View>
  );
}
