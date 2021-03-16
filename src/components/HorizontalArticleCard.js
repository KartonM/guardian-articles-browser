import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'native-base';
import SkeletonContent from 'react-native-skeleton-content';
import {useNavigation} from '@react-navigation/native';
import {unbookmarkArticle} from '../redux/reducer';
import {Ionicons} from '@expo/vector-icons';
import useIsBookmarked from '../hooks/useIsBookmarked';
import {useDispatch} from 'react-redux';

function HorizontalArticleCard({article}) {
  const navigation = useNavigation();
  const isBookmarked = useIsBookmarked(article);
  const dispatch = useDispatch();
  return (
    <Card style={styles.card}>
      <TouchableOpacity
        style={styles.cardContentContainer}
        onPress={() => navigation.navigate('Article', {article: article})}>
        <SkeletonContent isLoading={!article} containerStyle={styles.thumbnail}>
          <Image source={{uri: article?.thumbnail}} style={styles.thumbnail} />
        </SkeletonContent>
        <View style={styles.titleContainer}>
          <SkeletonContent
            containerStyle={styles.flex0}
            isLoading={!article}
            layout={[
              {key: 'line1', width: '100%', height: 16},
              {key: 'line2', width: '80%', height: 16, marginTop: 4},
            ]}>
            <Text
              style={styles.headline}
              numberOfLines={4}
              ellipsizeMode="tail">
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
      </TouchableOpacity>
      {isBookmarked && (
        <TouchableOpacity
          onPress={() => {
            dispatch(unbookmarkArticle(article?.id));
          }}
          style={styles.bookmark}>
          <Ionicons
            color="#0000ffcf"
            size={36}
            name={isBookmarked ? 'md-bookmark' : 'md-bookmark-outline'}
          />
        </TouchableOpacity>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 8,
  },
  cardContentContainer: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },
  bookmark: {
    position: 'absolute',
    top: -4,
  },
  thumbnail: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  titleContainer: {
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
