import {View, Text} from 'react-native';
import React from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';

export default function LoweFloatUpRange() {
  return (
    <FloatingLabelTextInput
      label="Lower label"
      containerStyle={{height: 50}}
      floatUpRange={16}
      inputStyle={{marginTop: 5}}
      error="This field is required"
    />
  );
}
