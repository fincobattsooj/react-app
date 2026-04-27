import { getHomeData, ServiceItem } from "@/constants/homeData";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  primary: "#006B3F",
  bg: "#F4F4F4",
  white: "#FFFFFF",
  black: "#111111",
  orange: "#F47B20",
};

export default function CategoriesScreen() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    getHomeData().then((data) => setServices(data.services));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.black} />
        </TouchableOpacity>

        {services.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push(`/service/${item.id}` as any)}
          >
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={24} color={COLORS.orange} />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>
                {item.title.replace("\n", " ")}
              </Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color={COLORS.primary} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.black,
    marginBottom: 18,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#FFF1E8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  textBox: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.black,
  },

  cardDesc: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
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
