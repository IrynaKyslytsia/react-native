import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { Avatar } from './Avatar';
import { register } from "../redux/auth/operations";

export const RegistrationForm = ({onPress}) => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleForm = () => {
        if (email === "" || password === "") {
            return Alert.alert(
              "Не коректні дані",
              "Будь ласка, заповніть всі поля!"
            );
          } else {
            dispatch(
              register({ login, email, password })
            ).then((res) => {
              if (res.type === "auth/register/fulfilled") {
                reset();
                navigation.navigate("Home");
              } else {
                return Alert.alert(
                  "Помилка реєстрації",
                  `${res.payload}`
                );
              }
            });
          }
        };

    const reset = () => {
        setLogin('');
        setEmail('');
        setPassword('');
    };

  return (
    <View style={styles.form}>
        <Avatar />
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
            style={styles.input}
            username
            placeholder="Логін"
            placeholderTextColor={'#BDBDBD'}
            value={login}
            onChangeText={setLogin} />
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
            <Text style={styles.buttonText}>Зареєстуватися</Text>
        </Pressable>
        <View style={styles.textWrap}>
            <Text style={styles.text}>Вже є акаунт?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>Увійти</Text>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        gap: 16,
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
        top: -55,
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
});
