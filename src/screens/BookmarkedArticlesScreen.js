import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';

function BookmarkedArticlesScreen() {
  const [theme] = useTheme();
  const bookmarkedArticles = useSelector((state) => state.bookmarkedArticles);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
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
    paddingTop: 32,
  },
});

export default BookmarkedArticlesScreen;
