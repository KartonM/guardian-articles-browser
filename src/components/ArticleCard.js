import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import SkeletonContent from 'react-native-skeleton-content';
import {useNavigation} from '@react-navigation/native';
import useIsBookmarked from '../hooks/useIsBookmarked';
import {unbookmarkArticle} from '../redux/reducer';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import useTheme from '../hooks/useTheme';
import {removeStrongTags} from '../utils/text';

function ArticleCard({article}) {
  const [theme] = useTheme();
  const navigation = useNavigation();
  const isBookmarked = useIsBookmarked(article);
  const dispatch = useDispatch();

  console.log(article?.trailText);
  return (
    <Card style={[styles.card, {backgroundColor: theme.colors.card}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Article', {article: article})}>
        <SkeletonContent
          boneColor={theme.colors.boneColor}
          highlightColor={theme.colors.boneHighlightColor}
          isLoading={!article}
          containerStyle={styles.thumbnail}>
          <Image source={{uri: article?.thumbnail}} style={styles.thumbnail} />
        </SkeletonContent>
        <SkeletonContent
          boneColor={theme.colors.boneColor}
          highlightColor={theme.colors.boneHighlightColor}
          containerStyle={styles.textContainer}
          isLoading={!article}
          layout={[
            {key: 'line1', width: '100%', height: 16},
            {key: 'line2', width: '80%', height: 16, marginTop: 4},
            {key: 'line3', width: 72, height: 14, marginTop: 14},
          ]}>
          <Text style={[styles.headline, {color: theme.colors.text}]}>
            {article?.headline}
          </Text>
          <Text
            style={[
              styles.publicationDate,
              {color: theme.colors.secondaryText},
            ]}>
            {article &&
              new Date(
                Date.parse(article.firstPublicationDate),
              ).toLocaleDateString()}
          </Text>
        </SkeletonContent>
        <View
          style={[styles.divider, {borderBottomColor: theme.colors.text}]}
        />
        <SkeletonContent
          boneColor={theme.colors.boneColor}
          highlightColor={theme.colors.boneHighlightColor}
          containerStyle={styles.textContainer}
          isLoading={!article}
          layout={[
            {key: 'line1', width: '100%', height: 16},
            {key: 'line2', width: '100%', height: 16, marginTop: 4},
            {key: 'line3', width: '30%', height: 16, marginTop: 4},
          ]}>
          <Text style={[styles.trailText, {color: theme.colors.text}]}>
            {removeStrongTags(article?.trailText)}
          </Text>
        </SkeletonContent>
      </TouchableOpacity>
      {isBookmarked && (
        <TouchableOpacity
          onPress={() => {
            dispatch(unbookmarkArticle(article?.id));
          }}
          style={styles.bookmark}>
          <Ionicons
            color={theme.colors.bookmarkColor}
            size={42}
            name={isBookmarked ? 'md-bookmark' : 'md-bookmark-outline'}
          />
        </TouchableOpacity>
      )}
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
  bookmark: {
    position: 'absolute',
    top: -4,
    right: 8,
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
    borderWidth: 1,
    marginHorizontal: 16,
    width: '12%',
    marginTop: 4,
  },
  publicationDate: {
    fontSize: 14,
    marginTop: 10,
  },
  trailText: {
    fontSize: 16,
  },
  textContainer: {
    flex: 0,
    marginHorizontal: 16,
    marginTop: 8,
  },
});

export default ArticleCard;
