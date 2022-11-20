import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailsScreen, {
  MealDetailsScreenProps,
} from "./screens/MealDetailsScreen";
import MealsOverviewScreen, {
  MealsOverviewScreenProps,
} from "./screens/MealsOverviewScreen";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: MealsOverviewScreenProps;
  MealDetails: MealDetailsScreenProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: "All Meals" }}
            // options={({route, navigation}) => ({title: route.name})}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
