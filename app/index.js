import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import LoginPage from './screens/LoginPage/LoginPage'
import { Colors } from './global/Style';
import * as Font from 'expo-font';
import { BalooBhai2_400Regular, BalooBhai2_700Bold, useFonts } from '@expo-google-fonts/baloo-bhai-2';

const { width, height } = Dimensions.get('window');
export const vw = width / 100;
export const vh = height / 100;
  
const index = () => {
  let [fontsLoaded] = useFonts({
    BalooBhai2_400Regular, BalooBhai2_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={{backgroundColor: 'black', width: 100* vw, height: 100* vh }}>
      {/* <Link style={{paddingHorizontal: 5, backgroundColor: Colors.green}} href="./screens/LoginPage/LoginPage" >Go to Login Page</Link> */}
      <LoginPage></LoginPage>
    </View>
  )
}

export default index