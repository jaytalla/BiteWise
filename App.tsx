import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginPage from './screens/LoginPage/LoginPage';

export default function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <LoginPage></LoginPage>
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
