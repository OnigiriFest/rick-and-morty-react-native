import { gql, QueryResult, useQuery } from '@apollo/client';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Filter from '../../types/Filter';
import ResultsData from '../../types/Results';
import styles from './SearchBarStyle';

interface Props {
  setResults: (results: QueryResult) => void;
  type: Filter;
}

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

  const queryTerms = () => {
    if (type === 'characters') {
      return 'image';
    } else if (type === 'locations') {
      return 'dimension';
    } else if (type === 'episodes') {
      return 'episode';
    } else {
      return '';
    }
  };

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
          ${queryTerms()}
        }
      }
    }
  `;

  setResults(
    useQuery<ResultsData>(query, { notifyOnNetworkStatusChange: true })
  );

  const searchTermStyles =
    searchTerm.length > 0
      ? styles.searchInput
      : { ...styles.searchInput, ...styles.radiusRight };

  return (
    <>
      <View style={{ ...styles.iconContainer, ...styles.iconLeft }}>
        <AntDesign name="search1" size={24} color="#cbd5e0" />
      </View>
      <TextInput
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Morty"
        style={searchTermStyles}
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

export default SearchBar;
