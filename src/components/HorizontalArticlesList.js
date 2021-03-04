import React from 'react';

import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HorizontalArticleCard from './HorizontalArticleCard';
import useGuardianArticles from '../hooks/useGuardianArticles';
import {Card} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HorizontalArticlesList = ({section}) => {
  const [articles] = useGuardianArticles({
    sectionId: section.id,
    pageSize: 3,
    initArticles: [null, null],
  });

  const navigation = useNavigation();

  const renderMoreArticlesCard = () => {
    return articles ? (
      <Card style={styles.moreArticlesCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Section', {section: section});
          }}>
          <Text style={styles.moreArticlesMain}>More...</Text>
          <Text style={styles.moreArticlesSecondary}>
            Browse more articles from '{section.name}' section
          </Text>
        </TouchableOpacity>
      </Card>
    ) : null;
  };

  return (
    <View>
      <Text style={styles.header}>{section.name}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.listContentContainer}
        horizontal={true}
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <HorizontalArticleCard article={item} />}
        ListFooterComponent={renderMoreArticlesCard}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: '400',
  },
  itemSeparator: {
    margin: 4,
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  moreArticlesCard: {
    height: 130,
    width: 155,
    borderRadius: 8,
    padding: 10,
  },
  moreArticlesMain: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  moreArticlesSecondary: {
    marginTop: 12,
    color: 'gray',
  },
});

export default HorizontalArticlesList;
