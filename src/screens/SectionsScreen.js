import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SectionsScreen() {
  return (
    <View style={styles.container}>
      <Text>Sections</Text>
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

export default SectionsScreen;
