import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IUserData, IButtons } from '../model';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ResetPassword: React.FunctionComponent = () => {
  const [userData, setUserData] = React.useState<IUserData>({
    confirmation_code: '',
    password: '',
    password_confirmation: '',
  });

  const buttonsList: Array<IButtons> = React.useMemo(() => {
    return [
      { type: 'SUBMIT', bgColor: 'green' },
      { type: 'BACK_TO_SIGN_IN' },
    ]
  }, []);

  const handlePressed = (type: string): void => {
    console.log(type)
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>

      <CustomInput
        placeholder="confirmation_code"
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

export default ResetPassword;