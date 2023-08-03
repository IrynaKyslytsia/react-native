import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {CreatePostsScreen} from './CreatePostsScreen';
import {PostsScreen} from './PostsScreen';
import {ProfileScreen} from './ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

export const Home = () => {

  const navigation = useNavigation();

  return (    
    <Tabs.Navigator
    initialRouteName="Posts"
    screenOptions={({ route }) => ({
      headerTitleAlign: "center",
      headerTintColor: "#212121",
      headerTitleStyle: {
          fontFamily: 'Roboto-500',
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
        },
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Posts") {
          iconName = "grid";
        } else if (route.name === "CreatePost") {
          iconName = "plus";
        } else if (route.name === "Profile") {
          iconName = "user";
        }
        return <Feather 
          name={iconName} 
          size={24} 
          color={focused ? "#FF6C00" : "#212121CC"} />;
      },
    })}
  >
    <Tabs.Screen 
      name="Posts" 
      component={PostsScreen}
      options={{
        title: "Публікації",
        headerRight: () => (
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 16, padding: 5 }}
          />
        ),
      }} />
    <Tabs.Screen 
      name="CreatePost" 
      component={CreatePostsScreen}
      options={{
        title: "Створити публікацію",
        headerLeft: () => (
          <Feather
            name="arrow-left"
            size={24}
            color="#212121CC"
            style={{ marginLeft: 16, padding: 5 }}
            onPress={() => navigation.navigate("Posts")}
          />
        )
      }} />
    <Tabs.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{headerShown: false}} />
  </Tabs.Navigator>
  );
};
