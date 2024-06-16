import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'
import gb, { Colors } from '../../global/Style'

type Props = {}

const {width, height} = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const LoginPage = (props: Props) => {
  return (
      <View style={[gb.background]}>
        <ImageBackground style={[gb.background, gb.opacity_5, { position: 'relative' }]} source={require('../../assets/images/bg/bg-min.png')}>
        </ImageBackground>

        {/* CIRCLE LIGHT  */}
        <View style={[gb.roundedFull, gb.glow, {
            width: 120 * vw, height: 120 * vw, backgroundColor: 'white', position: 'absolute',
            top: -30 * vh, opacity: .15,  left: -10 * vw,
        }]}></View>

        {/* CONTENTS  */}
        <View style={[gb.background, {paddingHorizontal: 15 * vw, position:'absolute', flex: 1, justifyContent: 'center', alignItems: 'center', }]}>
              {/* TEXT CONTENT  */}
              <Text style={[gb.h1, { color: 'white', fontWeight: 'bold' }]}>BiteWise</Text>
              <Text style={[gb.baseFont, { color: 'white', textAlign:'center' }]}>Share Your Recipes, Discover New Tastes</Text>
              <View style={[{marginTop: 1 * vh, width: 50 * vw, height: .2 * vh, backgroundColor: 'white', }]}></View>

            {/* INPUTS  */}
              <TextInput  style={[gb.textDefault, gb.smallFont, { backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: 5 * vh, textAlign: 'center' }]} placeholderTextColor={'white'} placeholder='Username'></TextInput>
              <TextInput secureTextEntry={true} style={[gb.textDefault, gb.smallFont, { backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: 3 * vh, textAlign: 'center' }]} placeholderTextColor={'white'} placeholder='Password'></TextInput>
              <Pressable style={[gb.btnPrimary, {marginTop: 3 * vh, alignItems: 'center', backgroundColor: Colors.green}]}>
                  <Text style={[gb.h5, { color: 'white', fontWeight: 'bold', fontFamily:'BalooBhai2_700Bold' }]}>LOGIN</Text>
                </Pressable>
              <Text style={[gb.smallFont, { marginTop: 5 * vh, color: 'white', }]}>Doesn’t have an account? 
                  <Text style={[gb.smallFont, { color: Colors.orange, fontWeight: 'bold', fontFamily: 'BalooBhai2_700Bold' }]}> Create Account!</Text>
            </Text>

        </View>
    </View>
  )
}



export default LoginPage