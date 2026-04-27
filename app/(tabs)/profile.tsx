import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  primary: "#006B3F",
  bg: "#F4F4F4",
  white: "#FFFFFF",
  black: "#111111",
  orange: "#F47B20",
};
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color={COLORS.black} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
