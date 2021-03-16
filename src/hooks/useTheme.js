import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native-appearance';
import {setDarkMode as setPersistedDarkMode} from '../redux/reducer';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryText: 'green',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    secondaryText: 'red',
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

  const setDarkMode = useCallback(
    (arg) => {
      console.log(arg);
      dispatch(setPersistedDarkMode(arg));
    },
    [dispatch],
  );

  return [isDark ? MyDarkTheme : MyDefaultTheme, setDarkMode];
}

export default useTheme;
