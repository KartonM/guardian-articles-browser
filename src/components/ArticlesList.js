import React from 'react';

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';
import useGuardianArticles from '../hooks/useGuardianArticles';
import HorizontalArticlesList from './HorizontalArticlesList';
import ArticleCard from './ArticleCard';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';

const ListItemType = Object.freeze({section: 1, header: 2, article: 3});

const ArticlesList = ({
  sections = [],
  mainSection = {id: '', name: 'All articles'},
  allArticles = undefined,
}) => {
  const [theme] = useTheme();
  const [fetchedArticles, fetchMore] = useGuardianArticles({
    pageSize: allArticles ? 0 : 10,
    sectionId: mainSection.id,
    initArticles: [null, null, null],
    rejectListedSectionIds: useSelector((state) =>
      state.sections.filter((s) => !s.isVisible).map((s) => s.id),
    ),
    onError: (errorMsg) => {
      Alert.alert(
        'Error',
        errorMsg,
        [
          {
            text: 'Exit',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
        {cancelable: false},
      );
    },
  });

  const sectionListItems = sections.map((section) => {
    return {itemType: ListItemType.section, section: section};
  });

  const headerListItem = {
    itemType: ListItemType.header,
    header: mainSection.name,
  };

  const articleListItems = (allArticles ?? fetchedArticles).map((article) => {
    return {itemType: ListItemType.article, article: article};
  });

  const listItems = [...sectionListItems, headerListItem, ...articleListItems];

  const renderItem = ({item}) => {
    // console.log(item);
    switch (item.itemType) {
      case ListItemType.section:
        return <HorizontalArticlesList section={item.section} />;
      case ListItemType.header:
        return (
          <Text style={[styles.header, {color: theme.colors.text}]}>
            {item.header}
          </Text>
        );
      case ListItemType.article:
        return <ArticleCard article={item.article} />;
    }
  };

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      contentContainerStyle={styles.listContentContainer}
      data={listItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      onEndReachedThreshold={0.9}
      onEndReached={fetchMore}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    margin: 4,
  },
  listContentContainer: {
    paddingVertical: 10,
  },
  header: {
    marginHorizontal: 12,
    marginTop: 12,
    fontSize: 22,
    fontWeight: '400',
  },
});

export default ArticlesList;
