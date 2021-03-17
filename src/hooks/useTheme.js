import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native-appearance';
import {setDarkMode as setPersistedDarkMode} from '../redux/reducer';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryText: 'gray',
    bookmarkColor: '#00558Bdf',
    boneColor: '#E1E9EE',
    boneHighlightColor: '#f7fcff',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    secondaryText: 'lightgray',
    bookmarkColor: '#00558Bdf',
    boneColor: '#1c1d1e',
    boneHighlightColor: '#212223',
  },
};

function useTheme() {
  const isDark = useSelector((state) => state.darkMode);
  const scheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDark === null) {
      dispatch(setPersistedDarkMode(scheme === 'dark'));
    }
  }, [isDark, dispatch, scheme]);

  const toggleDarkMode = useCallback(() => {
    dispatch(setPersistedDarkMode(!isDark));
  }, [dispatch, isDark]);

  return [isDark ? MyDarkTheme : MyDefaultTheme, toggleDarkMode];
}

export default useTheme;
