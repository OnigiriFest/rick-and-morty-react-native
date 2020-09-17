import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: '#1A202C',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 10,
  },
  resultsContainerText: {
    color: 'white',
    marginTop: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
