import {View, Text} from 'react-native';
import React from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';

export default function ColoredExample() {
  return (
    <FloatingLabelTextInput
      label="password"
      containerStyle={{backgroundColor: '#111'}}
      labelStyle={{backgroundColor: '#111'}}
      labelColor="#fff"
      inputStyle={{color: '#fff'}}
    />
  );
}
