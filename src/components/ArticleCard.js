import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import SkeletonContent from 'react-native-skeleton-content';
import {useNavigation} from '@react-navigation/native';

function ArticleCard({article}) {
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Article', {article: article})}>
        <SkeletonContent isLoading={!article} containerStyle={styles.thumbnail}>
          <Image source={{uri: article?.thumbnail}} style={styles.thumbnail} />
        </SkeletonContent>
        <SkeletonContent
          containerStyle={styles.textContainer}
          isLoading={!article}
          layout={[
            {key: 'line1', width: '100%', height: 16},
            {key: 'line2', width: '80%', height: 16, marginTop: 4},
            {key: 'line3', width: 72, height: 14, marginTop: 14},
          ]}>
          <Text style={styles.headline}>{article?.headline}</Text>
          <Text style={styles.publicationDate}>
            {article &&
              new Date(
                Date.parse(article.firstPublicationDate),
              ).toLocaleDateString()}
          </Text>
        </SkeletonContent>
        <View style={styles.divider} />
        <SkeletonContent
          containerStyle={styles.textContainer}
          isLoading={!article}
          layout={[
            {key: 'line1', width: '100%', height: 16},
            {key: 'line2', width: '100%', height: 16, marginTop: 4},
            {key: 'line3', width: '30%', height: 16, marginTop: 4},
          ]}>
          <Text style={styles.trailText}>{article?.trailText}</Text>
        </SkeletonContent>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    width: '95%',
    borderRadius: 8,
    paddingBottom: 16,
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
    marginTop: 10,
    color: 'gray',
  },
  trailText: {
    fontSize: 16,
  },
  textContainer: {
    flex: 0,
    marginHorizontal: 16,
    marginTop: 10,
  },
});

export default ArticleCard;
