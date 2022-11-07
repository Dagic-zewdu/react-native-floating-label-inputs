import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import FloatingTextInput from './src/floatingTextInput';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <FloatingTextInput label="My test" onChangeText={e => console.log(e)} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
