import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookmarkedArticles')}>
        <Text style={styles.menuItem}>Bookmarked articles</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity onPress={() => navigation.navigate('Sections')}>
        <Text style={styles.menuItem}>Sections</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    borderBottomColor: 'gray',
  },
});

export default ProfileScreen;
