import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {useSelector} from 'react-redux';

function BookmarkedArticlesScreen() {
  const bookmarkedArticles = useSelector((state) => state.bookmarkedArticles);

  return (
    <View style={styles.container}>
      <ArticlesList
        allArticles={bookmarkedArticles}
        mainSection={{id: '', name: 'Bookmarked articles'}}
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

export default BookmarkedArticlesScreen;
