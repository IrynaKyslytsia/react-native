import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export const LoginScreen = () => {
  return (
    
    <ImageBackground source={require('../assets/images/PhotoBG.jpg')} style={styles.bgImage}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Увійти</Text>
                    <TextInput
                        style={styles.input}
                        email
                        placeholder="Адреса електронної пошти" />
                    <TextInput
                        style={styles.input}
                        password
                        placeholder="Пароль" />
                        <Pressable>
                            <Text style={styles.inputLink}>Показати</Text>
                        </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Увійти</Text>
                    </Pressable>
                    <View style={styles.textWrap}>
                        <Text style={styles.text}>Немає акаунту?</Text>
                        <Pressable>
                            <Text style={styles.textLink}>Зареєструватися</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
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
    },

    form: {
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: "space-between",
        gap: 16,
    },

    title: {
        marginTop: 32,
        marginBottom: 33,
        textAlign: 'center',
        fontFamily: 'Roboto-500',
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.3,
    },

    input: {
        width: '100%',
        height: 50,
        padding: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: "#E8E8E8",
        borderWidth: 1,
    },

    inputLink: {
        position: 'absolute',
        top: -51,
        right: 16,
        color: '#1B4371',
    },

    button: {
        marginTop: 43,
        display: 'flex',
        width: '100%',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    buttonText: {
        fontFamily: 'Roboto-400',
        fontSize: 16,
        color: '#FFFFFF',
    },

    textWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
    },

    text: {
        fontFamily: 'Roboto-400',
        fontSize: 16,
        color: '#1B4371',
    },

    textLink: {
        fontFamily: 'Roboto-400',
        fontSize: 16,
        color: '#1B4371',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    }
})
