import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/welcome';
import Robot from './screens/robot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      {/* <Robot /> */}
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Robot" component={Robot} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#663600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
