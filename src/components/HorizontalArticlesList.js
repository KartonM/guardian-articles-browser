import React from 'react';

import {FlatList, View, Text, StyleSheet} from 'react-native';
import HorizontalArticleCard from './HorizontalArticleCard';
import useGuardianArticles from '../hooks/useGuardianArticles';

const HorizontalArticlesList = ({sectionId, sectionName}) => {
  const [articles] = useGuardianArticles({
    sectionId: sectionId,
    pageSize: 3,
  });

  return (
    <View>
      <Text style={styles.header}>{sectionName}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.listContentContainer}
        horizontal={true}
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <HorizontalArticleCard article={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 12,
  },
  itemSeparator: {
    margin: 4,
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
});

export default HorizontalArticlesList;
