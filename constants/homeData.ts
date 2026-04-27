import { Ionicons } from "@expo/vector-icons";

export type IoniconName = keyof typeof Ionicons.glyphMap;

export type ServiceItem = {
  id: number;
  title: string;
  icon: IoniconName;
  description: string;
  price: string;
  estimatedTime: string;
  image: string;
  includes: string[];
};

export type HomeData = {
  user: {
    name: string;
    location: string;
  };
  services: ServiceItem[];
  banner: {
    title: string;
    image: string;
  };
};

export const getHomeData = async (): Promise<HomeData> => {
  return {
    user: {
      name: "Lindsey",
      location: "Boston, 02108",
    },

    services: [
      {
        id: 1,
        title: "Additions\n& Remodels",
        icon: "business-outline",
        description:
          "Home additions, remodeling, renovation болон засварын үйлчилгээ.",
        price: "From $120",
        estimatedTime: "2 - 5 days",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Kitchen remodel",
          "Bathroom remodel",
          "Room addition",
          "Floor repair",
        ],
      },
      {
        id: 2,
        title: "Cleaning",
        icon: "water-outline",
        description:
          "Гэр цэвэрлэгээ, deep cleaning болон regular cleaning үйлчилгээ.",
        price: "From $40",
        estimatedTime: "2 - 4 hours",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Deep cleaning",
          "Window cleaning",
          "Kitchen cleaning",
          "Move-out cleaning",
        ],
      },
      {
        id: 3,
        title: "Painting",
        icon: "color-palette-outline",
        description: "Дотор болон гадна ханын будаг, засварын ажил.",
        price: "From $80",
        estimatedTime: "1 - 3 days",
        image:
          "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Interior painting",
          "Exterior painting",
          "Wall repair",
          "Color consultation",
        ],
      },
      {
        id: 4,
        title: "Heating",
        icon: "thermometer-outline",
        description: "Халаалт, heater засвар, шалгалт болон суурилуулалт.",
        price: "From $60",
        estimatedTime: "1 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Heater repair",
          "System check",
          "Installation",
          "Maintenance",
        ],
      },
      {
        id: 5,
        title: "Plumbing",
        icon: "hammer-outline",
        description: "Сантехник, ус алдалт, хоолой, угаалтуур засвар.",
        price: "From $50",
        estimatedTime: "1 - 4 hours",
        image:
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Leak repair",
          "Pipe repair",
          "Sink repair",
          "Drain cleaning",
        ],
      },
      {
        id: 6,
        title: "Electrical",
        icon: "flash-outline",
        description: "Цахилгаан засвар, гэрэл, залгуур, wiring үйлчилгээ.",
        price: "From $70",
        estimatedTime: "1 - 5 hours",
        image:
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
        includes: [
          "Outlet repair",
          "Light install",
          "Wiring check",
          "Breaker repair",
        ],
      },
    ],

    banner: {
      title: "Home Care\nScheduler",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  };
};

export const getServiceById = async (id: string | number) => {
  const data = await getHomeData();
  return data.services.find((item) => item.id === Number(id));
};
