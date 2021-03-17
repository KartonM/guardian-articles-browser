import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Switch} from 'react-native';
import useTheme from '../hooks/useTheme';

function ProfileScreen({navigation}) {
  const [theme, toggleDarkMode] = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookmarkedArticles')}>
        <Text style={[styles.menuItem, {color: theme.colors.text}]}>
          Bookmarked articles
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.divider,
          {
            borderColor: theme.colors.secondaryText,
            backgroundColor: theme.colors.background,
          },
        ]}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Sections')}>
        <Text style={[styles.menuItem, {color: theme.colors.text}]}>
          Sections
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.divider, {borderColor: theme.colors.secondaryText}]}
      />
      <View style={styles.darkModeSwitchContainer}>
        <Text style={[styles.menuItem, {color: theme.colors.text}]}>
          Dark mode
        </Text>
        <Switch onChange={() => toggleDarkMode()} value={theme.dark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  darkModeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingRight: 12,
  },
});

export default ProfileScreen;
