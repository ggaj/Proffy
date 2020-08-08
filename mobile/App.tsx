import 'react-native-gesture-handler';

import React from 'react';
import AppStack from './src/routes/AppStack';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <AppStack />
      <StatusBar />
    </>
  );
};

export default App;
