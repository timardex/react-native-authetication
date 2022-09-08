import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmSignUpScreen from './src/screens/ConfirmSignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ConfirmSignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'Sign In' }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' }}/>
        <Stack.Screen name="ConfirmSignUpScreen" component={ConfirmSignUpScreen} options={{ title: 'Confirm Sign Up' }}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }}/>
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ title: 'Reset Password' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
