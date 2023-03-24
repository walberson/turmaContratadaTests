import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Profile } from './src/screens/Profile';

export default function App() {

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Profile/>
      <Text>Open up App.js to start working on your app</Text>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
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
