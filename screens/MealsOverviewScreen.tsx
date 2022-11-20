import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type MealsOverviewScreenProps = {
  categoryId: string;
};

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

export default function MealsOverviewScreen({ route }: Props) {
  const { params } = route;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
