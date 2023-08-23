import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Screens/Home';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { auth } from "./config";
import { Octicons } from '@expo/vector-icons';
import {PostCard} from "./Components/PostCard";
import {MapScreen} from "./Screens/MapScreen";
import {CommentsScreen} from "./Screens/CommentsScreen";
import { useEffect, useState } from 'react';
// import { persistor, store } from "./redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  // const [initialRoute, setInitialRoute] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setInitialRoute(user ? "Home" : "Login");
  //   });
  // }, []);

  if (!fontsLoaded) {
    return null;
  };

  const MainStack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer style={styles.container}>
          <MainStack.Navigator initialRouteName={"Login"}>
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
            <MainStack.Screen
                name="PostCard"
                component={PostCard}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="Map"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="Comments"
                component={CommentsScreen}
                options={({ navigation }) => ({
                  title: "Коментарі",
                  headerTitleAlign: "center",
                  headerLeft: () => (
                    <Octicons
                      name="arrow-left"
                      size={24}
                      color={"#212121"}
                      style={{
                        marginLeft: 16,
                        padding: 5,
                      }}
                      onPress={() => navigation.navigate("Posts")}
                    />
                  ),
                })}
              />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
