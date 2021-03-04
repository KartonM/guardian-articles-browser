import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Card} from 'native-base';
import SkeletonContent from 'react-native-skeleton-content';

function HorizontalArticleCard({article}) {
  return (
    <Card style={styles.card}>
      <SkeletonContent isLoading={!article} containerStyle={styles.thumbnail}>
        <Image source={{uri: article?.thumbnail}} style={styles.thumbnail} />
      </SkeletonContent>
      <View style={styles.contentContainer}>
        <SkeletonContent
          containerStyle={styles.flex0}
          isLoading={!article}
          layout={[
            {key: 'line1', width: '100%', height: 16},
            {key: 'line2', width: '80%', height: 16, marginTop: 4},
          ]}>
          <Text style={styles.headline} numberOfLines={4} ellipsizeMode="tail">
            {article?.headline}
          </Text>
        </SkeletonContent>
        <View style={styles.divider} />
        <SkeletonContent
          containerStyle={[styles.flex0, styles.publicationDateContainer]}
          isLoading={!article}
          layout={[{key: 'line1', width: 72, height: 14}]}>
          <Text style={styles.publicationDate}>
            {article &&
              new Date(
                Date.parse(article.firstPublicationDate),
              ).toLocaleDateString()}
          </Text>
        </SkeletonContent>
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
    paddingLeft: 12,
    paddingTop: 4,
    paddingRight: 2,
    alignItems: 'stretch',
    flex: 1,
  },
  headline: {
    fontSize: 16,
  },
  divider: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '12%',
    top: 4,
  },
  publicationDate: {
    fontSize: 14,
  },
  flex0: {
    flex: 0,
  },
  publicationDateContainer: {
    top: 9,
  },
});

export default HorizontalArticleCard;
