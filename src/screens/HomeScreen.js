import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArticleCard from '../components/ArticleCard';
import HorizontalArticlesList from '../components/HorizontalArticlesList';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HorizontalArticlesList sectionId={'football'} sectionName={'Football'} />
      <ArticleCard
        article={{
          headline:
            'Budget 2021 live: Johnson faces Starmer at PMQs before Sunak unveils measures to protect jobs',
          trailText:
            'Plus: Coventry’s ground-hopping, a 16-goal swing and the highest honour bestowed on a referee',
          firstPublicationDate: '2021-03-03T09:14:05Z',
          thumbnail:
            'https://media.guim.co.uk/9b915b46a8c3301e6baae011de2020c1a51d9db3/0_186_5568_3341/500.jpg',
        }}
      />
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
