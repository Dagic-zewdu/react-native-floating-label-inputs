import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  Animated,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './style';

interface Props extends TextInputProps {
  label: string | number;
  error?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
}

const FloatingTextInput = ({
  label,
  error = '',
  containerStyle,
  labelColor = '#111',
  labelStyle = {},
  inputStyle = {},
  ...props
}: Props) => {
  const [val, setValue] = useState(props.value ? props.value : '');

  const moveText = useRef(new Animated.Value(props.value ? 1 : 0)).current;

  const onChangeText = (text: string) => {
    setValue(text);
    props.onChangeText ? props.onChangeText(text) : () => {};
  };
  const onFocusHandler = () => {
    moveTextTop();
    props?.onFocus ? props?.onFocus() : () => {};
  };

  const onBlurHandler = () => {
    if (!val) {
      moveTextBottom();
    }
    props?.onBlur ? props?.onBlur() : () => {};
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -18],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.inputContainer,
          ...containerStyle,
          borderColor: error ? 'red' : '#bdbdbd',
        }}>
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Text
            style={{
              ...styles.label,
              ...labelStyle,
              color: error ? 'red' : labelColor,
            }}>
            {label}
          </Text>
        </Animated.View>
        <TextInput
          style={{...styles.input, ...inputStyle}}
          value={val}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          {...props}
          onChangeText={text => onChangeText(text)}
        />
      </View>
      <Text style={{...styles.error, marginTop: error ? 5 : 0}}>{error}</Text>
    </View>
  );
};
export default FloatingTextInput;
