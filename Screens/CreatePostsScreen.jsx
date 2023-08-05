import React, { useState, useEffect, useRef } from "react";
import { Keyboard } from "react-native";
import { View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}>
                <View style={styles.cameraWrapper}>
                    <View style={styles.cameraButton}>
                      <MaterialCommunityIcons
                        name="camera"
                        size={24}
                        color={'#BDBDBD'} />
                    </View>
                </View>
                <Text style={styles.text}>Завантажте фото</Text>
                <View style={{marginVertical: 32}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Назва..."
                    placeholderTextColor={'#BDBDBD'} />
                  <Feather
                    name="map-pin"
                    size={24}
                    color={'#BDBDBD'}
                    style={styles.iconMap}
                  />
                  <TextInput
                    style={[styles.input, {paddingLeft: 28}]}
                    placeholder="Місцевість..."
                    placeholderTextColor={'#BDBDBD'} />
                </View>
                <Pressable 
                  style={styles.button}>
                  <Text style={styles.buttonText}>Опубліковати</Text>
                </Pressable>
                <View style={styles.deleteButton}>
                  <Feather
                    name="trash-2"
                    size={24}
                    color={'#BDBDBD'} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  keyboardAvoidingView: {
    flex: 1,
    marginTop: 'auto',
  },

  cameraWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },

  cameraButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF'
  },

  text: {
    marginTop: 8,
    fontFamily: 'Roboto-400',
    fontSize: 16,
    color: '#BDBDBD',
  },

  input: {
    height: 50,
    marginBottom: 16,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD'
  },

  iconMap: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: [{ translateY: 8 }],
  },

  button: {
    width: 343,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
},

buttonText: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    color: '#BDBDBD',
},

deleteButton: {
  width: 70,
  height: 40,
  backgroundColor: "#F6F6F6",
  borderRadius: 100,
  marginTop: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
}
});
