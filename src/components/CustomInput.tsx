import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { IUserData } from '../model';
import  { prettifyText } from '../helpers';

type Props = {
  placeholder: string,
  userData: IUserData,
  setUserData: Function,
  secureTextEntry?: boolean
};

const CustomInput: React.FunctionComponent<Props> = ({ placeholder, userData, setUserData, secureTextEntry }) => {
  const handleSetData = (event: string) => {
    setUserData({
      ...userData,
      [placeholder as keyof IUserData]: event,
    })
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={userData[placeholder as keyof IUserData]}
        onChangeText={(e) => handleSetData(e)}
        placeholder={prettifyText(placeholder)}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  input: {
    width: '100%',
    padding: 10
  }
})

export default CustomInput;
