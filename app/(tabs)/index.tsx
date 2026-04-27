import { getHomeData } from "@/constants/homeData";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const COLORS = {
  primary: "#006B3F",
  lightGreen: "#8FE0B7",
  bg: "#F4F4F4",
  white: "#FFFFFF",
  black: "#111111",
  muted: "#8A8A8A",
  orange: "#F47B20",
};

type HomeData = Awaited<ReturnType<typeof getHomeData>>;

export default function HomeScreen() {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    getHomeData().then(setData);
  }, []);

  if (!data) return null;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.hello}>Hello, {data.user.name}!</Text>

            <View style={styles.locationRow}>
              <Text style={styles.location}>{data.user.location}</Text>
              <Ionicons
                name="location-outline"
                size={18}
                color={COLORS.lightGreen}
              />
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={20} color={COLORS.muted} />
              <TextInput
                placeholder="What service are you looking for?"
                placeholderTextColor={COLORS.muted}
                style={styles.searchInput}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.grid}>
              {data.services.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.serviceCard}
                  onPress={() => router.push(`/service/${item.id}` as any)}
                >
                  <Ionicons name={item.icon} size={24} color={COLORS.orange} />
                  <Text style={styles.serviceTitle}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <ImageBackground
              source={{ uri: data.banner.image }}
              style={styles.banner}
              imageStyle={styles.bannerImage}
            >
              <View style={styles.bannerOverlay} />

              <Text style={styles.bannerTitle}>{data.banner.title}</Text>

              <TouchableOpacity style={styles.arrowButton}>
                <Ionicons name="arrow-forward" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.activeNavItem}
            onPress={() => router.push("/")}
          >
            <Ionicons name="home-outline" size={22} color={COLORS.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/categories")}
          >
            <Ionicons name="grid-outline" size={22} color={COLORS.lightGreen} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/calendar")}
          >
            <Ionicons
              name="calendar-outline"
              size={22}
              color={COLORS.lightGreen}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/profile")}
          >
            <Ionicons
              name="person-outline"
              size={22}
              color={COLORS.lightGreen}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const CARD_GAP = 4;
const CARD_WIDTH = (width - 20 - CARD_GAP * 2) / 3;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  scrollContent: {
    paddingBottom: 110,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingBottom: 26,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    alignItems: "center",
  },

  dynamicIsland: {
    width: 74,
    height: 22,
    backgroundColor: "#000000",
    borderRadius: 20,
    marginTop: 2,
    marginBottom: 6,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 9,
  },

  cameraDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#1C2C5B",
  },

  hello: {
    color: COLORS.lightGreen,
    fontSize: 12,
    marginTop: 2,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },

  location: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "800",
  },

  searchBox: {
    width: "100%",
    height: 54,
    backgroundColor: COLORS.white,
    borderRadius: 28,
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 12,
    color: COLORS.black,
  },

  body: {
    paddingHorizontal: 10,
    paddingTop: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: CARD_GAP,
  },

  serviceCard: {
    width: CARD_WIDTH,
    height: 78,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 12,
    justifyContent: "space-between",
  },

  serviceTitle: {
    fontSize: 11,
    color: COLORS.black,
    fontWeight: "800",
    lineHeight: 13,
  },

  banner: {
    height: 126,
    marginTop: 10,
    borderRadius: 16,
    overflow: "hidden",
    padding: 18,
    justifyContent: "space-between",
  },

  bannerImage: {
    borderRadius: 16,
  },

  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  bannerTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "800",
    lineHeight: 25,
  },

  arrowButton: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: COLORS.orange,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomNav: {
    position: "absolute",
    bottom: 22,
    left: 28,
    right: 28,
    height: 58,
    backgroundColor: COLORS.primary,
    borderRadius: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },

  activeNavItem: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },

  navItem: {
    width: 46,
    height: 46,
    borderRadius: 46,
    alignItems: "center",
    justifyContent: "center",
  },
});
