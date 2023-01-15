import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/welcome';
import Robot from './screens/robot';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <Robot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#663600',
    alignItems:'center',
    justifyContent: 'center',
  },
});
