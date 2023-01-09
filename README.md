# React Native Floating Label Input

## About The Package

 This is React Native package full customizable and its props extends from [React-native textinput props](https://reactnative.dev/docs/textinput#props). If you your label floats in the text input while focusing or in blur this is the perfect package and also multiple examples to full fill your expecations.💅🎉
## Getting Started

`npm install react-native-floating-inputs` 

or using yarn

`yarn add react-native-floating-inputs`

![screen shot](./screen-shot/screen-shot.gif)

# Props

|             Prop              |     Type                     |                                                     Default                                                                                                                       |                                                                                                                                                 Description                                                                                                                                                  |
| :---------------------------: | :------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         `labelProps`          |                  TextProps                    |                                                                                                                      undefined                                                                                                                      |                                                                                                                                    Set the label props as `TextProps`          
|     `Icon`        | JSX.Element       | Undefined     | Add left side Icon component.
|     `floatUpRange`        | JSX.Element       | 25     | Set the floatUp Range.
|     `rightIcon`        | JSX.Element       | Undefined     | Add right side component, it can be an icon..
|     `inputStyle`        | ViewStyle       | Undefined     | Set the input style.
|     `labelStyle`        | TextStyle       | Undefined     | Set the label style for the floating label component.
|     `labelColor`        | String       | '#111'     | Set the lable color.
|     `containerStyle`        | ViewStyle       | Undefined     | Set styles to the input container component.
|     `onBlur`        | JSX.Element       | Undefined     | when the text input loses focus.
|     `onFocus`        | JSX.Element       | Undefined     | when the text input receives focus.
|     `onChangeText`        | String       | Undefined     | whenever the text in the input changes. It is passed a single argument, which is the new text value of the input.
|     `error`        | String       | Undefined     | Set your error message.

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

- Lower Float Up Range

<img src="https://raw.githubusercontent.com/Dagic-zewdu/react-native-floating-label-inputs/feature/examples/LowerFloatUpRange/photo.jpeg"/>

``` js
import {View, Text} from 'react-native';
import React from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';

export default function LoweFloatUpRange() {
  return (
    <FloatingLabelTextInput
      label="Lower label"
      containerStyle={{height: 50}}
      floatUpRange={16}
      inputStyle={{marginTop: 5}}
      error="This field is required"
    />
  );
} 
```

## support us
[☕  Buy me a coffee](https://www.buymeacoffee.com/dagizewdudc)

- You can also give as star to our repo.
## Authors

### Author 1

👤 **Dagmawi Zewdu**

 - GitHub: [@Dagic-zewdu](https://github.com/Dagic-zewdu)
- LinkedIn: [Dagi-Zewdu](https://www.linkedin.com/in/dagic-zewdu/)

### Author 2

👤 **Sentayhu Berhanu**

- GitHub: [@sentayhu19](https://github.com/sentayhu19)
- LinkedIn: [sentayhu-berhanu](https://www.linkedin.com/in/sentayhu-berhanu-6376579a/)

<!-- CONTRIBUTING -->
## Contribution

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [ReactNative](https://reactnative.dev/)
* [JavaScript](https://www.javascript.com/)

 

