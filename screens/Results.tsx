import React from 'react';
import { View, TextInput, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Results = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <AntDesign name="search1" size={24} color="#cbd5e0" />
        </View>
        <TextInput placeholder="Morty" style={styles.searchInput} />
      </View>
      <View style={styles.resultsContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#1A202C',
    color: 'white',
    height: 42,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingLeft: 10,
  },
  iconContainer: {
    backgroundColor: '#1A202C',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    width: 40,
    height: 42,
    paddingLeft: 10,
  },
  resultsContainer: {
    backgroundColor: '#1A202C',
    minHeight: '100%',
  },
});

export default Results;
