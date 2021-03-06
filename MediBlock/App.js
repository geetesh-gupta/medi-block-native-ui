import React from 'react';
import { ApplicationProvider, Layout, Text, } from '@ui-kitten/components';
import { mapping, light as lightTheme, Button, } from '@eva-design/eva';
import { View, StyleSheet, } from 'react-native';

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;