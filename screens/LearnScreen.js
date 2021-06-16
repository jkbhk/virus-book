import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen name="Calming Tones" component={MusicScreen} />
    </Stack.Navigator>
  );
}

function LearnScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "Top Left",
        justifyContent: "center",
        textAlign: "center",
        padding: 10,
        marginBottom: 200,
      }}
    >
      <TouchableOpacity
        style={{ color: "lightblue", padding: 25 }}
        onPress={() => navigation.navigate("Calming Tones")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            backgroundColor: "lightblue",
          }}
        >
          Self Care
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function MusicScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "Top Left",
        justifyContent: "center",
        textAlign: "center",
        padding: 10,
        marginBottom: 200,
      }}
    ></View>
  );
}
