import {View, Text} from 'react-native';
import React, {useState} from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';
// @ts-ignore
import Icon from 'react-native-vector-icons/EvilIcons';

export default function CommonExample() {
  return (
    <FloatingLabelTextInput
      label="Name"
      onChangeText={text => console.log(text)}
    />
  );
}
