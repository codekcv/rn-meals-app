import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import Meal from "../models/meal";
import { crossPlatformStyles } from "../utils/shadows";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: Meal;
};

export default function MealItem({ data }: Props) {
  const { title, imageUrl, duration, complexity, affordability } = data;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleNavigateToMealDetails() {
    navigation.navigate("MealDetails", { data });
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={handleNavigateToMealDetails}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    ...crossPlatformStyles.shadow,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
