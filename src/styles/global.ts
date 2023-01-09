import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 2,
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
    justifyContent: 'center',
    marginTop: 4,
    paddingRight: 10,
    width: '93%',
  },
  label: {
    fontSize: 13,
    backgroundColor: '#fff',
  },
  animatedStyle: {
    position: 'absolute',
    zIndex: 3,
    height: '100%',
    left: 15,
    justifyContent: 'center',
  },
  error: {
    width: '100%',
    color: 'red',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    left: 5,
    height: '100%',
    justifyContent: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    right: 10,
  },
});

export default styles;
