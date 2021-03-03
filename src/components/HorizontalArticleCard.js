import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Card} from 'native-base';

function HorizontalArticleCard({article}) {
  return (
    <Card style={styles.card}>
      <Image source={{uri: article.thumbnail}} style={styles.thumbnail} />
      <View style={styles.contentContainer}>
        <Text style={styles.headline} numberOfLines={4} ellipsizeMode="tail">
          {article.headline}
        </Text>
        <View style={styles.divider} />
        <Text style={styles.publicationDate}>
          {new Date(
            Date.parse(article.firstPublicationDate),
          ).toLocaleDateString()}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: Dimensions.get('screen').width * 0.8,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  thumbnail: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  contentContainer: {
    backgroundColor: 'red',
    paddingLeft: 12,
    paddingRight: 2,
    alignItems: 'stretch',
    flex: 1,
  },
  headline: {
    fontSize: 16,
    backgroundColor: 'green',
  },
  divider: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '12%',
    top: 4,
  },
  publicationDate: {
    fontSize: 14,
    top: 9,
    backgroundColor: 'orange',
  },
});

export default HorizontalArticleCard;
