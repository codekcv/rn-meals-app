import { FlatList, ListRenderItem, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

type Props = {
  navigation: any;
};

export default function CategoriesScreen({ navigation }: Props) {
  function handleNavigate() {
    navigation.navigate("MealsOverview");
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item: { title, color } }) => (
        <CategoryGridTile
          title={title}
          color={color}
          onPress={handleNavigate}
        />
      )}
      numColumns={2}
    />
  );
}
