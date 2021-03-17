import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';
import TopBar from '../components/TopBar';

const BookmarkedArticlesScreen = () => {
  const [theme] = useTheme();
  const bookmarkedArticles = useSelector((state) => state.bookmarkedArticles);

  return (
    <>
      <TopBar />
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        {bookmarkedArticles.length > 0 ? (
          <ArticlesList
            allArticles={bookmarkedArticles}
            mainSection={{id: '', name: 'Bookmarked articles'}}
          />
        ) : (
          <Text style={[styles.noArticlesText, {color: theme.colors.text}]}>
            Bookmarked articles will be listed here
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noArticlesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 48,
    paddingHorizontal: 16,
  },
});

export default BookmarkedArticlesScreen;
