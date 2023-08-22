import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config";
import { Ionicons } from "@expo/vector-icons";
import {Comment} from "../Components/Comment";
import { addComment } from "../redux/posts/operations";
import { selectPosts } from "../redux/posts/selectors";

export const CommentsScreen = ({ route }) => {
  const { idPost, photo } = route.params;
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const comments = posts.find(({ id }) => id === idPost).comments;

  const handleSendComment = () => {
    dispatch(
      addComment({
        idPost,
        idUser: auth.currentUser.uid,
        date: new Date(),
        text: comment,
      })
    ).then((res) => {
      if (res.type === "posts/addComment/fulfilled") {
        setComment("");
      } else {
        return Alert.alert(
          "Помилка створення коментаря",
          `Опис помилки із сервера: ${res.payload}`
        );
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingViewStyles}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image source={{ uri: photo }} style={styles.backgroundPhoto} />
          <View style={styles.comments}>
            {comments.map((item, index) => (
              <Comment key={index} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          width: "100%",
        }}
      >
        <TextInput
          value={comment}
          placeholder="Коментувати..."
          placeholderTextColor={'#BDBDBD'}
          style={styles.input}
          multiline={true}
          onChangeText={setComment}
        />
        <Ionicons
          name="arrow-up-circle"
          size={34}
          color={"#FF6C00"}
          style={styles.arrowUpButton}
          onPress={handleSendComment}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingViewStyles: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#212121",
    backgroundColor: "#FFFFFF",
  },

  backgroundPhoto: {
    width: "100%",
    height: 240,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    borderRadius: 8,
    overflow: "hidden",
    resizeMode: "cover",
    flex: 1,
  },

  comments: {
    flex: 1,
    marginBottom: 32,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  input: {
    height: 50,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 16,
    color: "#212121",
    fontFamily: "Roboto-500",
    fontSize: 16,
    textAlignVertical: "top",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderColor: '#BDBDBD',
    borderWidth: 1,
  },

  arrowUpButton: { 
    position: "absolute", 
    bottom: 8, 
    right: 24 
  },
});

