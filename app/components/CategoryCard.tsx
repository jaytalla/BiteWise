import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import gb, { Colors } from "../global/Style";
import { vh, vw } from "../index";
import { Ionicons } from "@expo/vector-icons";

const CategoryCard = ({ name, image, selectID, id, selectedID }) => {
  const SelectCategory = () => {
    selectID();
    console.log("Select this " + name);
    // alert('Select this ' + name);
  };

  const bgColor = selectedID === id ? Colors.green : Colors.white;
  const textColor = selectedID != id ? Colors.green : Colors.white;

  return (
    <TouchableOpacity
      onPress={SelectCategory}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View
        style={[
          gb.background,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View
          style={[
            ,
            {
              justifyContent: "center",
              alignItems: "center",
              width: 20 * vw,
              height: 15 * vw,
              padding: 5,
              marginRight: 2 * vw,
              backgroundColor: bgColor,
              borderRadius: 20,
              shadowColor: Colors.dark,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.15,
              shadowRadius: 5,
              elevation: 5,
            },
          ]}
        >
          <Ionicons name={image} color={textColor} size={5 * vw}></Ionicons>
        </View>
        <Text
          style={[
            {
              fontSize: 2.5 * vw,
              marginTop: 1 * vh,
              marginLeft: -2 * vw,
              textAlign: "center",
            },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
