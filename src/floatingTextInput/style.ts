import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 2,
    paddingLeft: 35,
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    height: 45,
    color: '#000',
  },
  label: {
    fontSize: 13,
    backgroundColor: '#fff',
  },
  animatedStyle: {
    top: 11,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 3,
  },
  error: {
    width: '100%',
    color: 'red',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 11,
    left: 5,
  },
});

export default styles;
