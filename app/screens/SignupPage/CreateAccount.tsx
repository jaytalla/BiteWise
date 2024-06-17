import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'
import gb, { Colors } from '../../global/Style';
import { Link, router } from 'expo-router';

type Props = {}

const { width, height } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const CreateAccount = (props: Props) => {
    return (
        <View style={[gb.background, { backgroundColor: 'black' }]}>
            <ImageBackground style={[gb.background, gb.opacity_5, { position: 'relative' }]} source={require('../../assets/images/bg/bg-min.png')}>
            </ImageBackground>

            {/* CIRCLE LIGHT  */}
            <View style={[gb.roundedFull, gb.glow, {
                width: 120 * vw, height: 120 * vw, backgroundColor: 'white', position: 'absolute',
                top: -30 * vh, opacity: .15, left: -10 * vw,
            }]}></View>

            {/* CONTENTS  */}
            <View style={[gb.background, { paddingHorizontal: 15 * vw, position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center', }]}>
                {/* TEXT CONTENT  */}
                <Text style={[gb.h1, { color: 'white', fontWeight: 'bold' }]}>BiteWise</Text>
                <Text style={[gb.baseFont, { color: 'white', textAlign: 'center' }]}>Welcome to BiteWise! Where you can share and gain new recipe.</Text>
                <View style={[{ marginTop: 1 * vh, width: 50 * vw, height: .2 * vh, backgroundColor: 'white', }]}></View>

                {/* INPUTS  */}
                <TextInput style={[gb.textDefault, gb.smallFont, { backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: 5 * vh, textAlign: 'center' }]} placeholderTextColor={'white'} placeholder='Username'></TextInput>
                <TextInput secureTextEntry={true} style={[gb.textDefault, gb.smallFont, { backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: 3 * vh, textAlign: 'center' }]} placeholderTextColor={'white'} placeholder='Password'></TextInput>
                <Pressable style={[gb.btnPrimary, { marginTop: 3 * vh, alignItems: 'center', backgroundColor: Colors.green }]}>
                    <Text style={[gb.h5, { color: 'white', fontWeight: 'bold', fontFamily: 'BalooBhai2_700Bold' }]}>CREATE ACCOUNT</Text>
                </Pressable>
                <Text style={[gb.smallFont, { alignItems: 'center', marginTop: 5 * vh, color: 'white', }]}>Already have an account?
                    
                </Text>
                <Pressable style={{ padding: 2, alignItems: 'center', alignContent: 'center' }} onPress={() => router.back()}>
                    <Text style={[gb.baseFont, { color: Colors.orange, fontWeight: 'bold', fontFamily: 'BalooBhai2_700Bold' }]}> Login!</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CreateAccount