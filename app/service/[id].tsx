import { getServiceById, ServiceItem } from "@/constants/homeData";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  primary: "#006B3F",
  lightGreen: "#8FE0B7",
  bg: "#F4F4F4",
  white: "#FFFFFF",
  black: "#111111",
  muted: "#8A8A8A",
  orange: "#F47B20",
};

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (id) {
      getServiceById(id).then((result) => {
        if (result) setService(result);
      });
    }
  }, [id]);

  if (!service) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Service not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: service.image }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.overlay} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color={COLORS.black} />
          </TouchableOpacity>

          <View style={styles.heroContent}>
            <View style={styles.iconCircle}>
              <Ionicons name={service.icon} size={28} color={COLORS.orange} />
            </View>

            <Text style={styles.title}>{service.title.replace("\n", " ")}</Text>
            <Text style={styles.subtitle}>{service.description}</Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Ionicons name="cash-outline" size={22} color={COLORS.primary} />
              <Text style={styles.infoLabel}>Price</Text>
              <Text style={styles.infoValue}>{service.price}</Text>
            </View>

            <View style={styles.infoCard}>
              <Ionicons name="time-outline" size={22} color={COLORS.primary} />
              <Text style={styles.infoLabel}>Time</Text>
              <Text style={styles.infoValue}>{service.estimatedTime}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Includes</Text>

          {service.includes.map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={COLORS.primary}
              />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Service</Text>
            <Ionicons name="arrow-forward" size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    height: 330,
    padding: 20,
    justifyContent: "space-between",
  },

  heroImage: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },

  heroContent: {
    marginBottom: 18,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 58,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  title: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    width: "90%",
  },

  content: {
    padding: 18,
  },

  infoRow: {
    flexDirection: "row",
    gap: 12,
  },

  infoCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
  },

  infoLabel: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 8,
  },

  infoValue: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "800",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 14,
    color: COLORS.black,
  },

  includeItem: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },

  includeText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.black,
  },

  bookButton: {
    height: 58,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  bookButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "800",
  },
});
