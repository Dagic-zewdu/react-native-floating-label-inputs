import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

type InterpolateRangeProps = {
  inputRange: [number, number];
  outputRange: [number, number];
};
export interface FloatingLabelProps extends TextInputProps {
  label?: string | number;
  error?: string;
  onChangeText?: (text: string) => void; // onChange
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  floatUpRange?: number;
}
