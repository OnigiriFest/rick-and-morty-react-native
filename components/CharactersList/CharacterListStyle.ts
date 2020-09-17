import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#1A202C',
    borderRadius: 20,
  },
  image: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 150,
    width: 150,
    marginRight: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;
