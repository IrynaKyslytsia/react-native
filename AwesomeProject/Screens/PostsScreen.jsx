import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <Text style={styles.title}>Публікації</Text>
        </View>
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
            <View style={styles.toolBar}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
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

    header: {
        minWidth: 375,
        width: '100%',
        paddingTop: 55,
        paddingBottom: 11,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
    },

    title: {
        fontSize: 17,
        fontFamily: 'Roboto-500',
        lineHeight: 22,
        letterSpacing: -0.408,
        textAlign: 'center',
    },

    container: {
        flex: 1,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
    },

    user: {
        marginTop: 32,
        marginBottom: 32,
        display: 'flex',
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

    toolBar: {
        display: 'flex',
        marginTop: 'auto',
        alignItems: 'center',
        minWidth: 375,
        width: '100%',
        paddingTop: 9,
        paddingBottom: 34,
        borderTopColor: '#BDBDBD',
        borderTopWidth: 1,
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    buttonText: {
        color: '#FFFFFF',
    },
})
