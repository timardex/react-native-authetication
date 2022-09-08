import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { IUserData, IButtons, TNavigation } from '../model';
import { stylesGlobal } from '../styles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ForgotPasswordScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<TNavigation>();

  const [userData, setUserData] = React.useState<IUserData>({
    email: '',
  });

  const buttonsList: Array<IButtons> = React.useMemo(() => {
    return [
      { type: 'SEND', bgColor: 'green' },
      { type: 'BACK_TO_SIGN_IN' },
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
    <View style={stylesGlobal.root}>
      <Text style={stylesGlobal.title}>Forgot Password</Text>

      <CustomInput
        placeholder="email"
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

export default ForgotPasswordScreen;