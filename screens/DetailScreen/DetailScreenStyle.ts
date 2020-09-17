import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 10,
  },
  detailContainerText: {
    color: 'white',
    marginTop: 10,
  },
  container: {
    height: '100%',
    backgroundColor: '#1A202C',
  },
  cardContainer: {
    width: '100%',
  },
  cardContainerContent: {
    alignItems: 'center',
  },
  card: {
    maxWidth: 450,
    width: '93%',
    backgroundColor: '#4a5568',
    marginVertical: 20,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
