import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { selectUser } from "../redux/auth/selectors";

export const Comment = ({ data }) => {
  const { idUser, date, text } = data;
  const user = useSelector(selectUser);

  return user.id === idUser ? (
    <View style={styles.container}>
      <View
        style={[
          styles.commentContainer,
          {
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{ uri: user.photo }} style={styles.avatar} />
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Ellipse.png")}
        style={styles.avatar}
      />
      <View
        style={[
          styles.commentContainer,
          {
            borderTopRightRadius: 6,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
    overflow: "hidden",
    resizeMode: "cover",
    backgroundColor: "#BDBDBD",
  },

  commentContainer: {
    width: 299,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  text: {
    marginBottom: 8,
    fontFamily: "Roboto-400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },

  date: {
    fontFamily: "Roboto-400",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});