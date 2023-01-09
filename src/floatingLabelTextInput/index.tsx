import React, {useState, useRef} from 'react';
import {View, TextInput, Text, Animated} from 'react-native';
import styles from '../styles/global';
import {FloatingLabelProps} from '../types';

const FloatingLabelTextInput = ({
  label = '',
  error = '',
  containerStyle,
  labelColor = '#111',
  labelStyle = {},
  inputStyle = {},
  icon,
  rightIcon,
  floatUpRange = 25,
  ...props
}: FloatingLabelProps) => {
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
    outputRange: [0, -floatUpRange],
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
          paddingLeft: icon ? 31 : 16,
          ...containerStyle,
          borderColor: error ? 'red' : '#bdbdbd',
        }}>
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Text
            style={{
              ...styles.label,
              left: icon ? 20 : 5,
              ...labelStyle,
              color: error ? 'red' : labelColor,
            }}>
            {label}
          </Text>
        </Animated.View>
        {icon ? (
          <View style={styles.iconContainer}>{icon}</View>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <TextInput
          style={{...styles.input, ...inputStyle}}
          value={val}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          {...props}
          onChangeText={text => onChangeText(text)}
        />
        {rightIcon ? (
          <View style={styles.rightIconContainer}>{rightIcon}</View>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </View>
      <Text style={{...styles.error, marginTop: error ? 5 : 0}}>{error}</Text>
    </View>
  );
};
export default FloatingLabelTextInput;
