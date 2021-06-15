import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen
        name="Hand Washing Techniques"
        component={HandWashingScreen}
      />
      <Stack.Screen
        name="Mask Wearing Methodology"
        component={MaskWearingScreen}
      />
      <Stack.Screen name="More Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function LearnScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "Top Left",
        justifyContent: "Top",
        textAlign: "center",
        padding: 25,
      }}
    >
      <TouchableOpacity
        style={{ color: "lightblue", padding: 25 }}
        onPress={() => navigation.navigate("Hand Washing Techniques")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            backgroundColor: "lightblue",
          }}
        >
          Proper Hand Washing
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ color: "lightblue", padding: 25 }}
        onPress={() => navigation.navigate("Mask Wearing Methodology")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            backgroundColor: "lightblue",
          }}
        >
          Proper Mask Wearing
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function HandWashingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          width: 500,
          height: 500,
          borderRadius: 0,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://www.healthhub.sg/sites/assets/Assets/Article%20Images/washing_hands_photos.jpg",
        }}
      />

      <TouchableOpacity
        style={{ color: "lightblue" }}
        onPress={() => navigation.navigate("More Details")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            backgroundColor: "lightblue",
            alignItems: "bottomleft",
          }}
        >
          For More Details Click Here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function MaskWearingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          width: 500,
          height: 500,
          borderRadius: 0,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://www.who.int/images/default-source/health-topics/coronavirus/masks-infographic---final-(web---rgb).png?sfvrsn=c67232f0_19",
        }}
      />
      <TouchableOpacity
        style={{ color: "lightblue" }}
        onPress={() => navigation.navigate("More Details")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            backgroundColor: "lightblue",
            alignItems: "bottomleft",
          }}
        >
          For More Details Click Here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
}
