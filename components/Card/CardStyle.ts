import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    maxWidth: 450,
    width: '93%',
    backgroundColor: '#4a5568',
    marginVertical: 20,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
  text: {
    color: 'white',
    marginTop: 25,
  },
});

export default styles;
