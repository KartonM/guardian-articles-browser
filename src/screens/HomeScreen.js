import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {Ionicons} from '@expo/vector-icons';

function HomeScreen({navigation}) {
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
      <ArticlesList
        sections={[
          {id: 'football', name: 'Football'},
          {id: 'tv-and-radio', name: 'Television & radio'},
        ]}
      />
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
