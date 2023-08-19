import React, { useState, useEffect, useRef } from "react";
import { ImageBackground, Keyboard, TouchableOpacity } from "react-native";
import { View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Text, Pressable, TextInput, Image } from "react-native";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export const CreatePostsScreen = () => {

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  // const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync()
    setPhoto(photo.uri)
    console.log(photo.uri)
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  };

  const buttonStyles = photo && title && place ? {
    backgroundColor: '#FF6C00',
    color: '#FFFFFF'
  } : {
    backgroundColor: '#F6F6F6',
    color: '#BDBDBD'
  };

  const handleSubmit = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    navigation.navigate("Posts");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}>
                <View style={styles.cameraWrapper}>
                    {hasPermission ? (
                      !photo ? (
                        <Camera 
                      style={styles.cameraWrapper} 
                      ref={setCamera}
                      type={type}>
                        {photo && (<View style={styles.takePhotoContainer}>
                          <Image 
                            source={{uri: photo}} 
                            style={{width: 343, height: 240}}/>
                        </View>)}
                        <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                          <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={'#BDBDBD'} />
                        </TouchableOpacity>
                    </Camera>
                      ) : (
                        <ImageBackground 
                          source={{uri: photo}}
                          style={styles.cameraWrapper} >
                          <View style={[styles.cameraButton, {backgroundColor: "rgba(255, 255, 255,0.3)"}]}>
                          <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={'#FFFFFF'}
                            onPress={() => {
                              setPhoto(null);
                             }} />
                          </View>
                        </ImageBackground>
                      )
                    ) : (
                      <View style={styles.cameraWrapper}>
                        <Text>No access to camera</Text>
                      </View>
                    )}
                </View>
                {!photo ? (
                  <Text style={styles.text}>Завантажте фото</Text>
                ) : (
                  <Text style={styles.text}>Редагувати фото</Text>
                )}
                <View style={{marginVertical: 32}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Назва..."
                    placeholderTextColor={'#BDBDBD'}
                    value={title}
                    onChangeText={setTitle} />
                  <Feather
                    name="map-pin"
                    size={24}
                    color={'#BDBDBD'}
                    style={styles.iconMap}
                  />
                  <TextInput
                    style={[styles.input, {paddingLeft: 28}]}
                    placeholder="Місцевість..."
                    placeholderTextColor={'#BDBDBD'}
                    value={place}
                    onChangeText={setPlace} />
                </View>
                <Pressable 
                  style={[styles.button, buttonStyles]}
                  onPress={handleSubmit}>
                  <Text style={[styles.buttonText, buttonStyles]}>Опубліковати</Text>
                </Pressable>
                <View style={styles.deleteButton}>
                  <Feather
                    name="trash-2"
                    size={24}
                    color={'#BDBDBD'}
                    onPress={() => {
                      setPhoto(null);
                      setTitle("");
                      setPlace("");
                    }} />
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
    overflow: "hidden"
  },

  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "red",
    borderRadius: 8
  },

  cameraButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    
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
    borderRadius: 100,
},

buttonText: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
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
