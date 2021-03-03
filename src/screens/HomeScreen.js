import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArticlesList from '../components/ArticlesList';

function HomeScreen() {
  return (
    <View style={styles.container}>
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
});

export default HomeScreen;
