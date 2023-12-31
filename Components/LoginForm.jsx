import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { auth } from '../config';

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            !user ? navigation.navigate("Login") : navigation.navigate("Home");
        });
      }, []);

    const handleForm = () => {
        if (email === "" || password === "") {
            return Alert.alert(
              "Не коректні дані",
              "Будь ласка, заповніть всі поля!"
            );
          } else {
            dispatch(logIn({ email, password }))
            .then((res) => {
              if (res.type === "auth/login/fulfilled") {
                reset();
                
              } else {
                return Alert.alert(
                  "Помилка входу",
                  `${res.payload}`
                );
              }
            });
          }
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
            style={styles.input}
            email
            placeholder="Адреса електронної пошти"
            placeholderTextColor={'#BDBDBD'}
            value={email}
            onChangeText={setEmail} />
        <TextInput
            style={styles.input}
            password
            placeholder="Пароль"
            placeholderTextColor={'#BDBDBD'}
            value={password}
            onChangeText={setPassword} />
        <Pressable>
            <Text style={styles.inputLink}>Показати</Text>
        </Pressable>
        <Pressable 
            style={styles.button}
            onPress={handleForm}>
            <Text style={styles.buttonText}>Увійти</Text>
        </Pressable>
        <View style={styles.textWrap}>
            <Text style={styles.text}>Немає акаунту?</Text>
            <Pressable onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.textLink}>Зареєструватися</Text>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16,
        justifyContent: "space-between",
        gap: 16,
    },

    title: {
        marginVertical: 33,
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
});
