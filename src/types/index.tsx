import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface FloatingLabelProps extends TextInputProps {
  label?: string | number;
  error?: string | boolean;
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
