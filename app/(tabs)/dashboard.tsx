import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { vw, vh } from "../index";
import gb, { Colors } from "../global/Style";
import CategoryCard from "../components/CategoryCard";

import homeImage from "../assets/icons/home.png";
import FoodCard from "../components/FoodCard";
import foodsImage from "../constants/foodsImage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type Props = {};

const Dashboard = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Breakfast",
      icon: "fast-food",
    },
    {
      id: 2,
      name: "Lunch",
      icon: "checkmark-circle",
    },
    {
      id: 3,
      name: "Dinner",
      icon: "checkmark-circle",
    },
    {
      id: 4,
      name: "Meryenda",
      icon: "checkmark-circle",
    },
    {
      id: 5,
      name: "Chicken",
      icon: "checkmark-circle",
    },
    {
      id: 6,
      name: "Burger",
      icon: "checkmark-circle",
    },
    {
      id: 7,
      name: "Fish",
      icon: "checkmark-circle",
    },
  ];

  const foodCardList = [
    { id: 1, name: "Egg Oglio Tofu", icon: foodsImage.Food1 },
    { id: 2, name: "Honey Pan Cake", icon: foodsImage.Food2 },
    { id: 3, name: "Egg Cake", icon: foodsImage.Food1 },
    { id: 4, name: "Some Random", icon: foodsImage.Food2 },
    { id: 5, name: "Chicken Chuchu", icon: foodsImage.Food1 },
    { id: 6, name: "Burger Chuchu", icon: foodsImage.Food2 },
    { id: 7, name: "Fish Chuchu", icon: foodsImage.Food1 },
  ];

  return (
    <View style={[gb.background, { backgroundColor: Colors.yellowWhite }]}>
      <View
        style={{
          padding: 40,
          paddingTop: 6 * vh,
          width: 100 * vw,
          height: 22 * vh,
          backgroundColor: Colors.green,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "auto",
          }}
        >
          <View>
            <Text style={[gb.smallFont, { color: Colors.white }]}>
              Hello User!
            </Text>
            <Text
              style={[
                gb.baseFont,
                { marginTop: 0.5 * vh, color: Colors.white },
              ]}
            >
              Ready to Cook yet?
            </Text>
          </View>
          {/* PROFILE PICTURE  */}
          <Image
            style={[
              gb.roundedFull,
              { width: 7 * vw, height: 7 * vw, backgroundColor: "white" },
            ]}
          ></Image>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Looking for..."
            style={[
              gb.textNormal,
              gb.smallFont,
              {
                paddingHorizontal: 20,
                borderRadius: 10,
                width: "70%",
                backgroundColor: Colors.white,
                marginTop: 2 * vh,
                marginRight: "5%",
                height: 5 * vh,
              },
            ]}
          ></TextInput>
          {/* SEARCH BUTTON  */}
          <Pressable
            style={[
              gb.btnPrimary,
              {
                justifyContent: "center",
                borderRadius: 10,
                width: "25%",
                marginTop: 2 * vh,
                alignItems: "center",
                backgroundColor: Colors.darkGreen,
                height: 5 * vh,
              },
            ]}
          >
            <Text
              style={[
                gb.baseFont,
                {
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "BalooBhai2_700Bold",
                },
              ]}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </View>

      {/* CATEGORIES CONTAINER  */}
      <View
        style={[
          gb.background,
          { padding: 40, height: "auto", paddingBottom: 5 },
        ]}
      >
        <Text style={[gb.h5, {}]}>Categories</Text>
        <FlatList
          data={categoryList}
          renderItem={({ item, index }) => (
            <CategoryCard
              selectID={() => setSelectedCategory(item.id)}
              selectedID={selectedCategory}
              name={item.name}
              image={item.icon}
              id={item.id}
              key={item.id}
            ></CategoryCard>
          )}
          extraData={selectedCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[
            gb.background,
            {
              padding: 10,
              marginTop: 2 * vh,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "auto",
            },
          ]}
        />
      </View>

      {/* FOOD CARDS  */}
      <View
        style={[
          gb.background,
          { padding: 40, height: "auto", paddingVertical: 0 },
        ]}
      >
        <FlatList
          data={foodCardList}
          renderItem={({ item, index }) => (
            <FoodCard name={item.name} image={item.icon}></FoodCard>
          )}
          extraData={selectedCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[
            gb.background,
            {
              marginTop: 2 * vh,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "auto",
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Dashboard;
