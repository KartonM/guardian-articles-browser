import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HorizontalArticleCard from '../components/HorizontalArticleCard';
import HorizontalArticlesList from '../components/HorizontalArticlesList';

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*<HorizontalArticleCard*/}
      {/*  article={{*/}
      {/*    title:*/}
      {/*      'React Native still has the concept of style inheritance, but limited to text subtrees. In this case',*/}
      {/*    // 'dupa',*/}
      {/*    thumbnail:*/}
      {/*      'https://media.guim.co.uk/4f53091cef6238123052c5a2329a8e067b840fa6/0_173_5190_3114/500.jpg',*/}
      {/*    publicationDate: '28.01',*/}
      {/*  }}*/}
      {/*/>*/}
      <HorizontalArticlesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
  },
});

export default HomeScreen;
