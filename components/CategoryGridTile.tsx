import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

export default function CategoryGridTile({ title, color, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
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
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    // Android Shadow
    elevation: 4,
    // iOS Shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
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
