import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import gb, { Colors } from "../../global/Style";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { fetchAllData } from "../../firebase/CRUD/ReadData";
import { loginUser } from "../../firebase/CRUD/LoginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const { width, height } = Dimensions.get("window");
const vw = width / 100;
const vh = height / 100;

const LoginPage = (props: Props) => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleInput = (name, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const CheckIfHasUserID = async () => {
    const userID = await AsyncStorage.getItem("userID");
    console.log(userID);
    if (userID != null) {
      router.replace("(tabs)/dashboard");
    }
  };

  useEffect(() => {
    CheckIfHasUserID();
  }, []);

  const Login = () => {
    const { username, password } = inputs;
    loginUser(String(username), String(password));
    console.log(String(username) + " - " + String(password));
  };

  return (
    <View style={[gb.background, { backgroundColor: "black" }]}>
      <StatusBar style="light"></StatusBar>
      <ImageBackground
        style={[gb.background, gb.opacity_5, { position: "relative" }]}
        source={require("../../assets/images/bg/bg-min.png")}
      ></ImageBackground>

      {/* CIRCLE LIGHT  */}
      <View
        style={[
          gb.roundedFull,
          gb.glow,
          {
            width: 120 * vw,
            height: 120 * vw,
            backgroundColor: "white",
            position: "absolute",
            top: -30 * vh,
            opacity: 0.15,
            left: -10 * vw,
          },
        ]}
      ></View>

      {/* CONTENTS  */}
      <View
        style={[
          gb.background,
          {
            paddingHorizontal: 15 * vw,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        {/* TEXT CONTENT  */}
        <Text style={[gb.h1, { color: "white", fontWeight: "bold" }]}>
          BiteWise
        </Text>
        <Text style={[gb.baseFont, { color: "white", textAlign: "center" }]}>
          Share Your Recipes, Discover New Tastes
        </Text>
        <View
          style={[
            {
              marginTop: 1 * vh,
              width: 50 * vw,
              height: 0.2 * vh,
              backgroundColor: "white",
            },
          ]}
        ></View>

        {/* INPUTS  */}
        <TextInput
          style={[
            gb.textDefault,
            gb.smallFont,
            {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginTop: 5 * vh,
              textAlign: "center",
            },
          ]}
          placeholderTextColor={"white"}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={[
            gb.textDefault,
            gb.smallFont,
            {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginTop: 3 * vh,
              textAlign: "center",
            },
          ]}
          placeholderTextColor={"white"}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        ></TextInput>
        <Pressable
          // onPress={() => router.replace("/(tabs)/dashboard")}
          onPress={() => loginUser(username, password)}
          style={[
            gb.btnPrimary,
            {
              marginTop: 3 * vh,
              alignItems: "center",
              backgroundColor: Colors.green,
            },
          ]}
        >
          <Text
            style={[
              gb.h5,
              {
                color: "white",
                fontWeight: "bold",
                fontFamily: "BalooBhai2_700Bold",
              },
            ]}
          >
            LOGIN
          </Text>
        </Pressable>
        <Text style={[gb.smallFont, { marginTop: 5 * vh, color: "white" }]}>
          Doesn’t have an account?
          <Link href="screens/SignupPage/CreateAccount">
            <Text
              style={[
                gb.smallFont,
                {
                  color: Colors.orange,
                  fontWeight: "bold",
                  fontFamily: "BalooBhai2_700Bold",
                },
              ]}
            >
              {" "}
              Create Account!
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;
