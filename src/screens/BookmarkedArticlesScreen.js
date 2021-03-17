import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';
import TopBar from '../components/TopBar';

function BookmarkedArticlesScreen() {
  const [theme] = useTheme();
  const bookmarkedArticles = useSelector((state) => state.bookmarkedArticles);

  return (
    <>
      <TopBar />
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <ArticlesList
          allArticles={bookmarkedArticles}
          mainSection={{id: '', name: 'Bookmarked articles'}}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookmarkedArticlesScreen;
