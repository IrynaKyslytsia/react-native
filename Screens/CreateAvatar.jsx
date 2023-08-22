import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Keyboard, Platform, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export const CreateAvatar = ({ navigation, route }) => {
  const routePrev = route.params.routePrev;

  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type] = useState(Camera.Constants.Type.front);

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  const buttonStyles = photo
    ? {
        backgroundColor: '#FF6C00',
        color: '#FFFFFF',
      }
    : { 
      backgroundColor: "#F6F6F6", 
      color: "#BDBDBD" 
    };

  const handleSubmit = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    if (routePrev === "Profile") {
    }
    navigation.navigate(routePrev, { photo: photo });
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewStyles}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.cameraWrapper}>
            {hasPermission ? (
              !photo ? (
                <View style={styles.backgroundCamera}>
                  <Camera
                    style={styles.backgroundCamera}
                    type={type}
                    ref={setCamera}
                  >
                    <View style={styles.buttonPhoto}>
                      <MaterialCommunityIcons
                        name="camera"
                        size={24}
                        color={'#BDBDBD'}
                        onPress={async () => {
                          if (camera) {
                            const { uri } = await camera.takePictureAsync();
                            await MediaLibrary.createAssetAsync(uri);
                            setPhoto(uri);
                          }
                        }}
                      />
                    </View>
                  </Camera>
                </View>
              ) : (
                <ImageBackground
                  style={styles.backgroundCamera}
                  source={{ uri: photo }}>
                  <View
                    style={[
                      styles.buttonPhoto,
                      { backgroundColor: "rgba(255, 255, 255,0.3)" },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="camera"
                      size={24}
                      color={'#FFFFFF'}
                      onPress={() => {
                        setPhoto(null);
                      }}
                    />
                  </View>
                </ImageBackground>
              )
            ) : (
                <View style={styles.cameraWrapper}>
                    <Text>No access to camera</Text>
                </View>
            )}
            {!photo ? (
              <Text style={styles.text}>Завантажте фото</Text>
            ) : (
              <Text style={styles.text}>Редагувати фото</Text>
            )}
          </View>
          <Pressable 
            style={[styles.button, buttonStyles]}
            onPress={handleSubmit}>
            <Text style={[styles.buttonText, buttonStyles]}>Завантажити фото</Text>
          </Pressable> 
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },

  keyboardAvoidingViewStyles: {
    flex: 1,
  },

  cameraWrapper: { 
    width: "100%", 
    height: 467, 
    marginBottom: 32 
  },

  backgroundCamera: {
    width: "100%",
    height: 440,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 8,
  },
  buttonPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: commonStyles.vars.colorWhite,
  },

  text: {
    fontFamily: "Roboto-400", 
    fontSize: 16, 
    lineHeight: 18.75,
    marginTop: 8,
    color: commonStyles.vars.colorGray,
    height: 19,
  },
});
