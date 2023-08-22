import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../redux/posts/selectors';
import { selectUser } from '../redux/auth/selectors';
import { fetchPosts } from '../redux/posts/operations';
import { PostCard } from '../Components/PostCard';

export const PostsScreen = () => {

    const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const user = useSelector(selectUser);
  console.log(user)

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.user}>
                <Image source={require('../assets/images/Avatar.jpg')} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{user.login}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            </View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostCard data={item}></PostCard>}
                keyExtractor={(item) => item.id}
          />
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
    }
})
