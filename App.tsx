import {
  View,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import CommonExample from './examples/common/common';
import ColoredExample from './examples/colored';
import BorderBottomOnly from './examples/bottomBorderOnly';
import LoweFloatUpRange from './examples/LowerFloatUpRange';
import WithIcon from './examples/WithIcon';
import BorderBottomWithIcon from './examples/borderBottomWithIcon';
import TextAreaExample from './examples/textArea';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f0e1',
          }}>
          {/* <CommonExample />
          <ColoredExample />
          <BorderBottomOnly /> */}
          <LoweFloatUpRange />
          {/* <WithIcon />
          <BorderBottomWithIcon /> */}
          <TextAreaExample />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
