import React, {useState} from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontisoIcon from 'react-native-vector-icons/Fontisto';

export default function BorderBottomWithIcon() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <FloatingLabelTextInput
      label="Password"
      containerStyle={{
        borderWidth: 0,
        backgroundColor: '#f5f0e1',
        borderBottomWidth: 1,
        height: 40,
      }}
      labelStyle={{backgroundColor: '#f5f0e1'}}
      floatUpRange={16}
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
