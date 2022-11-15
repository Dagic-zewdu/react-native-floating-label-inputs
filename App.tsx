import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import FloatingTextInput from './src/floatingTextInput';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <FloatingTextInput
          label="Test sinte"
          error="Invalid klhfdg"
          onChangeText={text => console.log(text)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
