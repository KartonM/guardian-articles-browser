import React from 'react';

import {FlatList, View, Text, StyleSheet} from 'react-native';
import HorizontalArticleCard from './HorizontalArticleCard';
import {useEffect, useState} from 'react';

const HorizontalArticlesList = ({sectionId, sectionName}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log('robię request');
    fetch(
      `https://content.guardianapis.com/search?api-key=743c0667-8a7b-4eb9-aca4-d234e1bfcae8&page-size=2&section=${sectionId}&show-fields=headline,standfirst,thumbnail,firstPublicationDate`,
    )
      .then((response) => response.json())
      .then((json) => {
        const fetchedArticles = json.response.results.map((res) => res.fields);
        console.log(fetchedArticles);
        setArticles(fetchedArticles);
      })
      .catch((error) => console.error(error));
  }, [sectionId]);

  return (
    <View>
      <Text style={styles.header}>{sectionName}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.listContentContainer}
        horizontal={true}
        data={articles}
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
