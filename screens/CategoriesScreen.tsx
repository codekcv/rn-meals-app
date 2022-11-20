import { FlatList, ListRenderItem, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen() {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("MealsOverview" as never);
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CategoryGridTile item={item} />}
      numColumns={2}
    />
  );
}
