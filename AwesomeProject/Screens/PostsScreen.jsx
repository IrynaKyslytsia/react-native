import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <Text style={styles.title}>Публікації</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.user}>
                <Image style={styles.avatar} />
                <Text style={styles.name}>Natali Romanova</Text>
                <Text style={styles.email}>email@example.com</Text>
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

    header: {
        width: 375,
        paddingTop: 55,
        paddingBottom: 11,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
    },

    title: {
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 22,
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
    },

    avatar: {

    },

    name: {
        fontSize: 13,
        fontWeight: 700,
    },

    email: {
        fontSize: 11,
        color: 'rgba(33, 33, 33, 0.80)',
    },

    posts: {
        // posts styles
    }
})
