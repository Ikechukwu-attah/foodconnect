import React from "react";
import { View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Tabs } from "expo-router";

export const TabIcon = ({
  name,
  color,
  focused,
  icon,
}: {
  name: string;
  color: string;
  focused: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <View className="flex items-center justify-center gap-1 mt-2">
      {icon}
      <Text
        className={`${focused ? "font-bold" : "font-normal"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopColor: "#121212",
            borderTopWidth: 1,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Home"
                color={color}
                focused={focused}
                icon={<Fontisto name="home" size={20} color={color} />}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="donate"
          options={{
            title: "Donate",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Donate"
                color={color}
                focused={focused}
                icon={<FontAwesome5 name="donate" size={20} color={color} />}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="request-food"
          options={{
            title: "Request Food",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Food"
                color={color}
                focused={focused}
                icon={<FontAwesome5 name="utensils" size={20} color={color} />}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Profile"
                color={color}
                focused={focused}
                icon={<FontAwesome name="user" size={20} color={color} />}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="About"
                color={color}
                focused={focused}
                icon={
                  <FontAwesome name="info-circle" size={20} color={color} />
                }
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
