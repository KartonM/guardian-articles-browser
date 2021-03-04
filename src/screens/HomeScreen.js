import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';

function HomeScreen({navigation}) {
  const followedSections = useSelector((state) =>
    state.sections.filter((section) => section.isFollowed),
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons
          style={styles.profileIcon}
          name={'person'}
          size={32}
          color="black"
        />
      </TouchableOpacity>
      <ArticlesList sections={followedSections} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
  },
  profileIcon: {
    alignSelf: 'flex-end',
    padding: 4,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
