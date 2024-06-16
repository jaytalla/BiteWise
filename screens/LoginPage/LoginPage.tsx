import { View, Text, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import gb from '../../global/Style'

type Props = {}

const {width, height} = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const LoginPage = (props: Props) => {
  return (
      <View style={[gb.background]}>
        <ImageBackground style={[gb.background, gb.opacity_5, { position: 'relative' }]} source={require('../../assets/images/bg/bg-min.png')}>
        </ImageBackground>
        <View style={[gb.roundedFull, gb.glow, {
            width: 120 * vw, height: 120 * vw, backgroundColor: 'white', position: 'absolute',
            top: -30 * vh, opacity: .15,  left: -10 * vw,
        }]}>

        </View>
        <View style={[gb.background, {position:'absolute', flex: 1, justifyContent: 'center', alignItems: 'center', }]}>
              <Text style={[gb.h1, { color: 'white', fontWeight: 'bold' }]}>BiteWise</Text>
              <Text style={[gb.h5, { color: 'white' }]}>Share Your Recipes, Discover New Tastes</Text>
        </View>
    </View>
  )
}



export default LoginPage