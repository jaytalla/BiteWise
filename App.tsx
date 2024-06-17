import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { BalooBhai2_400Regular, BalooBhai2_700Bold, useFonts } from '@expo-google-fonts/baloo-bhai-2';

export default function App() {
  let [fontsLoaded] = useFonts({
    BalooBhai2_400Regular, BalooBhai2_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={{backgroundColor: 'black'}}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
