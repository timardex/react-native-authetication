import * as React from 'react';
import { Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

import  { prettifyText } from '../helpers';

type Props = {
  onPress: (event: GestureResponderEvent) => void,
  text: string,
  bgColor?: string,
  fgColor?: string,
};

const CustomButton: React.FunctionComponent<Props> = ({ onPress, text, bgColor = '#3B71F3', fgColor = 'white' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text style={[
        styles.text,
        fgColor ? {color: fgColor} : {}
      ]}>
        {prettifyText(text)}
      </Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  }
})

export default CustomButton;