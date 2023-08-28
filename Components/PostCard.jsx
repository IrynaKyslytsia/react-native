import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const PostCard = ({
  data: { id, photo, title, place, coords },
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.foto} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.postDataContainer}>
        <Feather
          name="message-circle"
          size={24}
          color={'#FF6C00'}
          style={{ marginRight: 6 }}
          onPress={() => {
            navigation.navigate("Comments", { idPost: id, photo });
          }}
        />
        <Text style={[styles.text, { marginRight: 24 }]}>
          0
        </Text>

        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Feather
            name="thumbs-up"
            size={24}
            color={'#FF6C00'}
            style={{ marginRight: 6 }}
          />
          <Text>0</Text>
        </View>

        <Feather
          name="map-pin"
          size={24}
          color={'#BDBDBD'}
          style={{ marginLeft: "auto", marginRight: 4 }}
          onPress={() => {
            navigation.navigate("Map", { title, place, coords });
          }}
        />
        <Text
          style={[
            styles.text,
            { textDecorationLine: "underline", textDecorationStyle: "solid" },
          ]}
        >
          {place}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 299,
    marginBottom: 32,
  },

  foto: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: "#F6F6F6",
  },

  title: {
    marginBottom: 8,
    fontFamily: "Roboto-500",
    fontSize: 16,
    color: '#212121',
  },

  postDataContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  text: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    color: '#212121',
  },
});
