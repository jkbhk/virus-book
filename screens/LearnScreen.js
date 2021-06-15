import React from "react";
import { View, Text, Image } from "react-native";

export default function LearnScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Many knowledge! Much wow!</Text>
      <Image
        style={{ width: 100, height: 100, borderRadius: 30 }}
        source={{
          uri: "https://i.pinimg.com/originals/8d/ec/f9/8decf9caed777b8d0d698e01270ce308.png",
        }}
      />
    </View>
  );
}
