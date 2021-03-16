import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import useTheme from '../hooks/useTheme';

function ProfileScreen({navigation}) {
  const [theme] = useTheme();
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
          {borderBottomColor: theme.colors.secondaryText},
        ]}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Sections')}>
        <Text style={[styles.menuItem, {color: theme.colors.text}]}>
          Sections
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  menuItem: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
  },
  divider: {
    borderWidth: 0.3,
    marginHorizontal: 16,
  },
});

export default ProfileScreen;
