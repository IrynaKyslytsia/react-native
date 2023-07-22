import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CreatePostsScreen from './CreatePostsScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import { Pressable } from "react-native";


const Tabs = createBottomTabNavigator();

export const Home = (navigation) => {
  return (    
      <View>
        <Text>Home Screen</Text>
      </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// const styles = StyleSheet.create({
//   toolBar: {
//     gap: 39,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 'auto',
//     minWidth: 375,
//     width: '100%',
//     paddingTop: 9,
//     paddingBottom: 34,
//     borderTopColor: '#BDBDBD',
//     borderTopWidth: 1,
// },

// button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 70,
//     height: 40,
//     alignItems: 'center',
//     backgroundColor: '#FF6C00',
//     borderRadius: 100,
// },
// });
