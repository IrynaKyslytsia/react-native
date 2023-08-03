import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Screens/Home';


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <NavigationContainer style={styles.container}>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen 
          name="Registration" 
          component={RegistrationScreen}
          options={{ headerShown: false }} />
        <MainStack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }} />
        <MainStack.Screen 
        name="Home" 
        component={Home}
        options={{ 
          headerShown: false,
          }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
