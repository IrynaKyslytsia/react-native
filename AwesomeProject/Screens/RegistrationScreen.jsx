import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export const RegistrationScreen = () => {
  return (
    
        <ImageBackground source={require('../assets/images/PhotoBG.jpg')} style={styles.bgImage}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <View>
                        <Image style={styles.avatar} />
                        <View style={styles.iconAdd}></View>
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

    container: {
        marginTop: 'auto',
        width: '100%',
        height: 549,
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

    avatar: {
        position: 'absolute',
        top: -60,
        left: '50%',
        transform: [{ translateX: -60 }],
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },

    iconAdd: {
        position: 'absolute',
        top: 18,
        right: 48,
        transform: [{ translateX: -60 }],
        width: 24,
        height: 24,
        borderRadius: 24,
        borderColor: "#FF6C00",
        borderWidth: 1,
    },

    title: {
        marginTop: 92,
        marginBottom: 33,
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 35,
        fontWeight: 500,
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
        fontSize: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    buttonText: {
        color: '#FFFFFF',
    },

    textWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
    },

    text: {
        color: '#1B4371',
    }
})
