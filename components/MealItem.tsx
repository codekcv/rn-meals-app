import { Text, View } from "react-native";
import Meal from "../models/meal";

type Props = {
  data: Meal;
};

export default function MealItem({ data }: Props) {
  const { title } = data;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
