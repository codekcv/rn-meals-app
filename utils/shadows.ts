import { Platform, StyleSheet } from "react-native";

export const crossPlatformStyles = StyleSheet.create({
  shadow: {
    // -- Android Shadow
    elevation: 4,
    // -- iOS Shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    // -- Platform
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
});
