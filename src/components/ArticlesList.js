import React from 'react';

import {FlatList, View, Text, StyleSheet} from 'react-native';
import useGuardianArticles from '../hooks/useGuardianArticles';
import HorizontalArticlesList from './HorizontalArticlesList';
import ArticleCard from './ArticleCard';

const ListItemType = Object.freeze({section: 1, header: 2, article: 3});

const ArticlesList = ({
  sections = [],
  mainSection = {id: '', name: 'All articles'},
}) => {
  const [articles, fetchMore] = useGuardianArticles({
    pageSize: 10,
    sectionId: mainSection.id,
    initArticles: [null, null, null],
  });

  const sectionListItems = sections.map((section) => {
    return {itemType: ListItemType.section, section: section};
  });

  const headerListItem = {
    itemType: ListItemType.header,
    header: mainSection.name,
  };

  const articleListItems = articles.map((article) => {
    return {itemType: ListItemType.article, article: article};
  });

  const listItems = [...sectionListItems, headerListItem, ...articleListItems];

  const renderItem = ({item}) => {
    // console.log(item);
    switch (item.itemType) {
      case ListItemType.section:
        return <HorizontalArticlesList section={item.section} />;
      case ListItemType.header:
        return <Text style={styles.header}>{item.header}</Text>;
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
