import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

function ArticleScreen({navigation}) {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: route.params.article.body}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 48,
  },
});

export default ArticleScreen;
