import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export type MealsOverviewScreenProps = {
  categoryId: string;
};

export default function MealsOverviewScreen() {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();
  const { categoryId } = params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, []);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {params.categoryId}</Text>

      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
