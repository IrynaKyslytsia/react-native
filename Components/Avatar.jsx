import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

export const Avatar = () => {
  return (
    <View>
        <View style={styles.avatarWrap}>
            <Image style={styles.avatar} />
        </View>
        <AntDesign 
            style={styles.iconAdd} 
            name="pluscircleo" 
            size={24} 
            color="#FF6C00" />
    </View>
  )
};

const styles = StyleSheet.create({
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
});
