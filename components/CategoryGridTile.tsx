import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Category from "../models/category";
import { RootStackParamList } from "../App";
import { crossPlatformStyles } from "../utils/shadows";

type Props = {
  item: Category;
};

export default function CategoryGridTile({ item }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { title, color, id } = item;

  function handleNavigate() {
    navigation.navigate("MealsOverview", { categoryId: id });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleNavigate}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    ...crossPlatformStyles.shadow,
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
