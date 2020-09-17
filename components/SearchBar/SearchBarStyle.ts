import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    backgroundColor: '#1A202C',
    color: 'white',
    height: 42,
    paddingLeft: 10,
  },
  iconContainer: {
    backgroundColor: '#1A202C',
    justifyContent: 'center',
    width: 40,
    height: 42,
    paddingHorizontal: 10,
  },
  iconLeft: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  radiusRight: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
});

export default styles;
