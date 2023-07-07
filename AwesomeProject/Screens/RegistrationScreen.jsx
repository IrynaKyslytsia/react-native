import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export const RegistrationScreen = () => {
    
  return (
    
    <ImageBackground source={require('../assets/images/PhotoBG.jpg')} style={styles.bgImage}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={{position: 'relative'}}>
                        <View style={styles.avatarWrap}>
                            <Image style={styles.avatar} />
                        </View>
                        <AntDesign 
                            style={styles.iconAdd} 
                            name="pluscircleo" 
                            size={24} 
                            color="#FF6C00" />
                    </View>
                    <Text style={styles.title}>Реєстрація</Text>
                    <TextInput
                        style={styles.input}
                        username
                        placeholder="Логін" />
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
                        <Text style={styles.buttonText}>Зареєстуватися</Text>
                    </Pressable>
                    <View style={styles.textWrap}>
                        <Text style={styles.text}>Вже є акаунт?</Text>
                        <Pressable>
                            <Text style={styles.text}>Увійти</Text>
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
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
    },

    form: {
        paddingHorizontal: 16,
        justifyContent: "space-between",
        gap: 16,
    },

    avatarWrap: {
        position: 'absolute',
        top: -60,
        left: '50%',
        transform: [{ translateX: -60 }],
    },

    avatar: {
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },

    iconAdd: {
        position: 'absolute',
        top: 18,
        right: '50%',
        transform: [{ translateX: 72 }],
    },

    title: {
        marginTop: 92,
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
        fontFamily: 'Roboto-400',
        fontSize: 16,
        color: '#1B4371',
    },

    button: {
        width: '100%',
        marginTop: 43,
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
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
    },

    text: {
        fontFamily: 'Roboto-400',
        fontSize: 16,
        color: '#1B4371',
    }
})
