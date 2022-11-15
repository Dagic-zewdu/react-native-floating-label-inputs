import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import FloatingTextInput from './src/floatingTextInput';
// @ts-ignore
import Icon from 'react-native-vector-icons/EvilIcons';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <FloatingTextInput
          label="Test sinte"
          error="Invalid Input"
          icon={<Icon name="clock"  size={30} color="#900"  />}
          onChangeText={text => console.log(text)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
