import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <Stack initialRouteName='screens/LoginPage/LoginPage' screenOptions={{headerShown: false}}>
      <Stack.Screen  name='screens/LoginPage/LoginPage' options={{ headerShown: false }} />
      <Stack.Screen name='screens/SignupPage/CreateAccount' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout