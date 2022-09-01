import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';

import { IUserData, IButtons, TNavigation } from '../model';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<TNavigation>();

  const [userData, setUserData] = React.useState<IUserData>({
    email: '',
    password: ''
  });

  const buttonsList: Array<IButtons> = React.useMemo(() => {
    return [
      { type: 'SIGN_IN' },
      { type: 'FORGOT_PASSWORD', bgColor: 'transparent', fgColor: '#000' },
      { type: 'SIGN_IN_WITH_FACEBOOK', bgColor: '#E7EAF4', fgColor: '#4765A9' },
      { type: 'SIGN_IN_WITH_GOOGLE', bgColor: '#FAE9EA', fgColor: '#DD4D44' },
      { type: 'SIGN_IN_WITH_APPLE', bgColor: '#e3e3e3', fgColor: '#363636' },
      { type: 'SIGN_UP', bgColor: 'green' },
    ]
  }, []);

  const handlePressed = (type: string): void => {
    switch(type) {
      case 'SIGN_IN':
        navigation.navigate('HomeScreen');
        break;
      case 'FORGOT_PASSWORD':
        navigation.navigate('ForgotPasswordScreen');
        break;
      case 'SIGN_UP':
        navigation.navigate('SignUpScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../../assets/favicon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="email"
        userData={userData}
        setUserData={setUserData}/>

      <CustomInput
        placeholder="password"
        userData={userData}
        setUserData={setUserData}
        secureTextEntry/>

      {buttonsList.map((item: IButtons) => (
        <CustomButton
          key={item.type}
          onPress={() => handlePressed(item.type)}
          text={item.type}
          bgColor={item.bgColor}
          fgColor={item.fgColor}/>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  }
});

export default SignInScreen;