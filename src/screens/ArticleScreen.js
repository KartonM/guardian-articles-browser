import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {bookmarkArticle, unbookmarkArticle} from '../redux/reducer';
import useIsBookmarked from '../hooks/useIsBookmarked';
import useTheme from '../hooks/useTheme';
import {removeStrongTags} from '../utils/text';
import TopBar from '../components/TopBar';

function ArticleScreen() {
  const [theme] = useTheme();
  const route = useRoute();
  const article = route.params.article;
  const isBookmarked = useIsBookmarked(article);
  const dispatch = useDispatch();
  return (
    <>
      <TopBar>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              isBookmarked
                ? unbookmarkArticle(article.id)
                : bookmarkArticle(article),
            );
          }}
          style={styles.bookmark}>
          <Ionicons
            color={theme.colors.bookmarkColor}
            size={42}
            name={isBookmarked ? 'md-bookmark' : 'md-bookmark-outline'}
          />
        </TouchableOpacity>
      </TopBar>
      <ScrollView
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Text style={[styles.title, {color: theme.colors.text}]}>
          {article.headline}
        </Text>

        <Text
          style={[styles.publicationDate, {color: theme.colors.secondaryText}]}>
          {new Date(
            Date.parse(article.firstPublicationDate),
          ).toLocaleDateString()}
        </Text>
        <View
          style={[
            styles.divider,
            {borderBottomColor: theme.colors.secondaryText},
          ]}
        />
        <Text style={[styles.standFirst, {color: theme.colors.text}]}>
          {removeStrongTags(article.trailText)}
        </Text>
        <Image source={{uri: article.thumbnail}} style={styles.thumbnail} />
        <Text style={[styles.body, {color: theme.colors.text}]}>
          {article.bodyText}
        </Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bookmark: {
    position: 'absolute',
    right: 16,
    top: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 36,
  },
  publicationDate: {
    fontSize: 16,
  },
  divider: {
    borderWidth: 1,
    width: '12%',
    marginTop: 4,
  },
  standFirst: {
    fontSize: 18,
    marginTop: 8,
  },
  body: {
    fontSize: 15,
    lineHeight: 21,
    marginTop: 6,
    textAlign: 'justify',
  },
  thumbnail: {
    width: '100%',
    height: 240,
    marginTop: 16,
  },
});

export default ArticleScreen;
