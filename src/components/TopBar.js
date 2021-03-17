import React from 'react';
import useTheme from '../hooks/useTheme';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

function TopBar({children, withBackBtn = true}) {
  const [theme] = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.topBar,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      <>
        {withBackBtn && (
          <TouchableOpacity
            style={styles.backBtnContainer}
            onPress={() => navigation.goBack()}>
            <Ionicons
              color={theme.colors.text}
              size={40}
              name="arrow-back-outline"
            />
          </TouchableOpacity>
        )}
        {children}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: 'flex-start',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingVertical: 8,
  },
  backBtnContainer: {
    marginHorizontal: 8,
  },
});

export default TopBar;
