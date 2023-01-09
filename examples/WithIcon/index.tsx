import React, {useState} from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';
//@ts-ignore
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
function WithIcon() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <FloatingLabelTextInput
      label="password"
      icon={
        <FontisoIcon
          name="locked"
          color="#111"
          size={20}
          onPress={() => console.log('Icon pressed')}
        />
      }
      rightIcon={
        !showPassword ? (
          <FontAwesome5Icon
            name="eye"
            color="#111"
            size={20}
            onPress={() => setShowPassword((s: boolean) => !s)}
          />
        ) : (
          <FontAwesome5Icon
            name="eye-slash"
            color="#111"
            size={20}
            onPress={() => setShowPassword((s: boolean) => !s)}
          />
        )
      }
      secureTextEntry={showPassword}
    />
  );
}

export default WithIcon;
