import { FlatList, ListRenderItem, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: { title, color } }) => (
          <CategoryGridTile title={title} color={color} />
        )}
        numColumns={2}
      />
    </View>
  );
}
