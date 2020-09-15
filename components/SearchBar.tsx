import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useQuery, gql, QueryResult } from '@apollo/client';

import ResultsData from '../types/Results';
import Filter from '../types/Filter';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface SearchBarProps {
  setResults: (results: QueryResult) => void;
  type: Filter;
}

type Props = SearchBarProps;

const SearchBar = ({ setResults, type }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermDebounced, setSearchTermDebounced] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTermDebounced(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const query = gql`
    query ${type}($page: Int) {
      ${type}(filter: { name: "${
    searchTermDebounced.length >= 3 ? searchTermDebounced : ''
  }" }, page: $page) {
        info {
          prev
          next
        }
        results {
          id
          name
          ${type === 'characters' ? 'image' : ''}
          ${type === 'locations' ? 'dimension' : ''}
          ${type === 'episodes' ? 'episode' : ''}
        }
      }
    }
  `;

  setResults(
    useQuery<ResultsData>(query, { notifyOnNetworkStatusChange: true })
  );

  return (
    <>
      <View style={{ ...styles.iconContainer, ...styles.iconLeft }}>
        <AntDesign name="search1" size={24} color="#cbd5e0" />
      </View>
      <TextInput
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Morty"
        style={
          searchTerm.length > 0
            ? styles.searchInput
            : { ...styles.searchInput, ...styles.radiusRight }
        }
      />
      {searchTerm.length > 0 && (
        <TouchableHighlight
          onPress={() => setSearchTerm('')}
          style={{ ...styles.iconContainer, ...styles.radiusRight }}>
          <AntDesign name="close" size={24} color="#cbd5e0" />
        </TouchableHighlight>
      )}
    </>
  );
};

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

export default SearchBar;
