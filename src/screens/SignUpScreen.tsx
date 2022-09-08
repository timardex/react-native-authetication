import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

import { IUserData, IButtons, TNavigation } from '../model';
import { stylesGlobal } from '../styles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignUpScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<TNavigation>();

  const [userData, setUserData] = React.useState<IUserData>({
    password: '',
    password_confirmation: '',
    email: '',
  });

  const buttonsList: Array<IButtons> = React.useMemo(() => {
    return [
      { type: 'SIGN_UP', bgColor: 'green' },
      { type: 'SIGN_IN' },
    ]
  }, []);

  const handlePressed = (type: string): void => {
    switch(type) {
      case 'SIGN_IN':
        navigation.navigate('SignInScreen');
        break;
      case 'SIGN_UP':
        navigation.navigate('ConfirmSignUpScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={stylesGlobal.root}>
      <Text style={stylesGlobal.title}>Create an account</Text>

      <CustomInput
        placeholder="email"
        userData={userData}
        setUserData={setUserData}/>

      <CustomInput
        placeholder="password"
        userData={userData}
        setUserData={setUserData}
        secureTextEntry/>

      <CustomInput
        placeholder="password_confirmation"
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

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link}>
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center'
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;