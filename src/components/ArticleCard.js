import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Card} from 'native-base';

function ArticleCard({article}) {
  return (
    <Card style={styles.card}>
      <Image source={{uri: article.thumbnail}} style={styles.thumbnail} />
      <Text style={styles.headline}>{article.headline}</Text>
      <Text style={styles.publicationDate}>
        {new Date(
          Date.parse(article.firstPublicationDate),
        ).toLocaleDateString()}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.trailText}>{article.trailText}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    width: '95%',
    borderRadius: 8,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  thumbnail: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    backgroundColor: 'red',
    paddingLeft: 12,
    paddingRight: 2,
    alignItems: 'stretch',
    flex: 1,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 10,
    // backgroundColor: 'green',
  },
  divider: {
    borderBottomColor: 'black',
    borderWidth: 1,
    marginHorizontal: 16,
    width: '12%',
    top: 4,
  },
  publicationDate: {
    fontSize: 14,
    marginHorizontal: 16,
    color: 'gray',
  },
  trailText: {
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 10,
  },
});

export default ArticleCard;
