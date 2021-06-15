import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import NewsScreen from "./screens/NewsScreen";
import LearnScreen from "./screens/LearnScreen";
import VaccineScreen from "./screens/VaccineScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Learn") {
              iconName = focused ? "book" : "book";
            } else if (route.name === "News") {
              iconName = focused ? "newspaper-o" : "newspaper-o";
            } else if (route.name === "Vaccines") {
              iconName = focused ? "shield" : "shield";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "limegreen",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Learn" component={LearnScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Vaccines" component={VaccineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
