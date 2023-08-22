import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, ScrollView, ImageBackground, Text } from "react-native";
import { signOut } from "firebase/auth";
import { Feather } from "@expo/vector-icons";
import { selectUser } from "../redux/auth/selectors";
import { logOut, updateUserData } from "../redux/auth/operations";
import { selectPosts } from "../redux/posts/selectors";
import { fetchPosts } from "../redux/posts/operations";
import { auth } from "../config";
import { PostCard } from "../Components/PostCard";
import { Avatar } from "../Components/Avatar";

export const ProfileScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  let photo = user.photo;
  if (route.params?.photo) {
    photo = route.params?.photo;
  }

  useEffect(() => {
    if (photo !== user.photo) {
      dispatch(updateUserData({ ...user, photo }));
    }
  }, [dispatch, photo]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector(selectPosts).filter(
    (item) => item.idUser === user.id
  );

  return (
    <ImageBackground>
      <ScrollView>
        <View style={styles.background}>
          <Avatar 
            customStyles={{
              top: -60,
              left: "50%",
              transform: [{ translateX: -50 }],
            }}
            add={false}
          />
          <Feather
            name="log-out"
            size={24}
            color={"#BDBDBD"}
            style={styles.logOut}
            onPress={async () => {
              try {
                await signOut(auth);
                logOut();
                navigation.navigate("Login");
              } catch (error) {
                console.log(error);
              }
            }}
          />
          <Text style={styles.userName}>
            {user.login}
          </Text>
          <View style={{ flex: 1, marginTop: 160 }}>
            {posts.map((item) => (
              <PostCard key={item.id} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
    padding: 5,
  },

  background: {
    marginTop: 147,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  userName: {
    fontFamily: 'Roboto-500',
    fontSize: 30,
    marginTop: 92,
    marginBottom: -123,
    marginLeft: "auto",
    marginRight: "auto",

  }
});

