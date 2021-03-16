import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';

function HomeScreen({navigation}) {
  const [theme] = useTheme();
  const followedSections = useSelector((state) =>
    state.sections.filter((section) => section.isFollowed),
  );
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={[styles.topBar, {backgroundColor: theme.colors.card}]}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons
            style={styles.profileIcon}
            name={'person'}
            size={32}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>
      <ArticlesList sections={followedSections} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    elevation: 2,
    paddingTop: 32,
    paddingBottom: 4,
  },
  profileIcon: {
    alignSelf: 'flex-end',
    padding: 4,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
