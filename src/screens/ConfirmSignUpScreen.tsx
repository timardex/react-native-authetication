import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

import { IUserData, IButtons, TNavigation } from '../model';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ConfirmSignUpScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<TNavigation>();

  const [userData, setUserData] = React.useState<IUserData>({
    email: '',
    confirmation_code: '',
  });

  const buttonsList: Array<IButtons> = React.useMemo(() => {
    return [
      { type: 'CONFIRM_SIGN_UP', bgColor: 'orange' },
      { type: 'BACK_TO_SIGN_IN' },
      { type: 'RESEND_CODE', bgColor: 'red' },
    ]
  }, []);

  const handlePressed = (type: string): void => {
    switch(type) {
      case 'BACK_TO_SIGN_IN':
        navigation.navigate('SignInScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Sign Up</Text>

      <CustomInput
        placeholder="email"
        userData={userData}
        setUserData={setUserData}/>

      <CustomInput
        placeholder="confirmation_code"
        userData={userData}
        setUserData={setUserData}/>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ConfirmSignUpScreen;