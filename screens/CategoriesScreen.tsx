import { FlatList, ListRenderItem, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CategoryGridTile item={item} />}
      numColumns={2}
    />
  );
}
