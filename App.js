import React from 'react';
import {Provider as StateProvider} from 'react-redux';
import configureStore from './src/redux/store';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const {store, persistor} = configureStore();
  return (
    <StateProvider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </StateProvider>
  );
}
