import React from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { LoginForm } from '../Components/LoginForm';


export const LoginScreen = () => {
  return (
    
    <ImageBackground source={require('../assets/images/PhotoBG.jpg')} style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}>
                <View style={styles.container}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({ 
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    keyboardAvoidingView: {
        flex: 1,
        marginTop: 'auto',
    },

    container: {
        marginTop: 'auto',
        width: '100%',
        height: 489,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
    }
})
