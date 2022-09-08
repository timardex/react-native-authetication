import * as React from 'react';
import { View, Text } from 'react-native';
import { stylesGlobal } from '../styles';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <View style={stylesGlobal.root}>
      <Text style={stylesGlobal.title}>Home</Text>
    </View>
  );
};

export default HomeScreen;
