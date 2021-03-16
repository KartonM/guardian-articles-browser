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
import {WebView} from 'react-native-webview';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {bookmarkArticle, unbookmarkArticle} from '../redux/reducer';
import useIsBookmarked from '../hooks/useIsBookmarked';

function ArticleScreen() {
  const route = useRoute();
  const article = route.params.article;
  const isBookmarked = useIsBookmarked(article);
  const dispatch = useDispatch();
  return (
    <>
      <ScrollView style={styles.container}>
        {/*<WebView*/}
        {/*  originWhitelist={['*']}*/}
        {/*  source={{*/}
        {/*    html: addCSSStyles(article.body),*/}
        {/*  }}*/}
        {/*/>*/}
        <Text style={styles.title}>{article.headline}</Text>
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
            color="blue"
            size={42}
            name={isBookmarked ? 'md-bookmark' : 'md-bookmark-outline'}
          />
        </TouchableOpacity>
        <Text style={styles.publicationDate}>
          {new Date(
            Date.parse(article.firstPublicationDate),
          ).toLocaleDateString()}
        </Text>
        <View style={styles.divider} />
        <Text style={styles.standFirst}>{article.trailText}</Text>
        <Image source={{uri: article.thumbnail}} style={styles.thumbnail} />
        <Text style={styles.body}>{article.bodyText}</Text>
      </ScrollView>
    </>
  );
}

function addCSSStyles(html) {
  let result = html.slice();
  console.log(result);
  result = changeDimensions(result, 'width="');
  console.log(result);

  result = changeDimensions(result, 'height="');
  console.log(result);

  return result
    .replaceAll(
      'data-block-contributor',
      'style="padding: 24" data-block-contributor',
    )
    .replaceAll('<p', '<p style="font-size: 3rem"')
    .replaceAll(
      '<img',
      '<img style="display: block; margin-left: auto; margin-right: auto;"',
    )
    .replaceAll('<ul', '<ul style="font-size: 3rem"')
    .replaceAll('<time', '<time style="font-size: 3rem"')
    .replaceAll('<h2', '<h2 style="font-size: 3.5rem"')
    .replaceAll('<figcaption', '<figcaption style="font-size: 2.5rem"');
}

const ratio = 0.8;
function changeDimensions(html, dimensionString) {
  const dimensions = [...html.matchAll(`${dimensionString}[0-9]*`)].map(
    (arr) => arr[0],
  );
  let result = html.slice();
  for (const dim of new Set(dimensions)) {
    result = result.replaceAll(
      dim,
      `${dimensionString}${dim.substring(dimensionString.length) * ratio}`,
    );
  }
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 32,
  },
  bookmark: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 36,
  },
  publicationDate: {
    fontSize: 16,
    color: 'gray',
  },
  divider: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '12%',
    marginTop: 4,
  },
  standFirst: {
    fontSize: 18,
    marginTop: 8,
    color: 'black',
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
