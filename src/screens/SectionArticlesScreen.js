import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ArticlesList from '../components/ArticlesList';
import useTheme from '../hooks/useTheme';

function SectionArticlesScreen() {
  const [theme] = useTheme();
  const route = useRoute();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ArticlesList mainSection={route.params.section} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SectionArticlesScreen;
