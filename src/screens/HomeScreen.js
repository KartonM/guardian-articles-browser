import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import ArticlesList from '../components/ArticlesList';
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import useTheme from '../hooks/useTheme';
import {logoDark, logoDefault} from '../image';
import TopBar from '../components/TopBar';

function HomeScreen({navigation}) {
  const [theme] = useTheme();
  const followedSections = useSelector((state) =>
    state.sections.filter((section) => section.isFollowed),
  );
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <StatusBar
        backgroundColor={theme.colors.card}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <TopBar withBackBtn={false}>
        <Image
          source={theme.dark ? logoDark : logoDefault}
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.profileIconContainer}>
          <Ionicons
            style={styles.profileIcon}
            name={'person'}
            size={32}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </TopBar>
      <ArticlesList sections={followedSections} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileIconContainer: {
    position: 'absolute',
    right: 8,
    top: 12,
  },
  profileIcon: {
    padding: 4,
    paddingHorizontal: 8,
  },
  logo: {
    alignSelf: 'center',
    width: 148,
    height: 49,
  },
});

export default HomeScreen;
