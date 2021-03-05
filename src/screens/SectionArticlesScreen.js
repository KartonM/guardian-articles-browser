import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ArticlesList from '../components/ArticlesList';

function SectionArticlesScreen() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <ArticlesList mainSection={route.params.section} />
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

export default SectionArticlesScreen;
