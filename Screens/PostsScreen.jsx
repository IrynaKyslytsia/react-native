import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.user}>
                <Image source={require('../assets/images/Avatar.jpg')} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>Natali Romanova</Text>
                    <Text style={styles.email}>email@example.com</Text>
                </View>
            </View>
            <View style={styles.posts}>
                {/* posts */}
            </View>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
    },

    user: {
        marginVertical: 32,
        flexDirection: 'row',
    },

    userInfo: {
        marginLeft: 8,
        justifyContent: 'center',
    },

    avatar: {
        width: 60,
        height: 60,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    name: {
        fontFamily: 'Roboto-700',
        fontSize: 13,
    },

    email: {
        fontFamily: 'Roboto-400',
        fontSize: 11,
        color: 'rgba(33, 33, 33, 0.80)',
    },

    posts: {
        // posts styles
    },
})
