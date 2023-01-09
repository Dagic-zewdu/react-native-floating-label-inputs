import React from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';

export default function TextAreaExample() {
  return (
    <FloatingLabelTextInput
      label="Description"
      floatUpRange={50}
      containerStyle={{height: 100}}
      inputStyle={{height: 100}}
      multiline={true}
    />
  );
}
