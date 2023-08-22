// Для роботи із firebase обовʼязково треба ініціалізувати проект
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCv50j0cGecbpZjnEXrIROyk_mJgqhhs6Y",
    authDomain: "myproject-ee63f.firebaseapp.com",
    projectId: "myproject-ee63f",
    storageBucket: "myproject-ee63f.appspot.com",
    messagingSenderId: "272510432282",
    appId: "1:272510432282:web:b94785dbc1751d8d6ecda3",
    databaseURL: "https://myproject-ee63f.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
export const db = getFirestore(app);
export const storage = getStorage(app);