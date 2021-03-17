import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import useTheme from '../hooks/useTheme';
import {logoRoundelDefault, logoRoundelDark} from '../image';

function SplashScreen() {
  const [theme] = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Image
        source={theme.dark ? logoRoundelDark : logoRoundelDefault}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default SplashScreen;
