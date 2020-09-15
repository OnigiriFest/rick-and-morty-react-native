import { QueryResult } from '@apollo/client';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Character from '../types/Character';
import Episode from '../types/Episode';
import Location from '../types/Location';

interface ResultsProps {
  navigation: any;
  route: any;
}

type Props = ResultsProps;

const Results = ({ route: { params }, navigation }: Props) => {
  const [results, setResults] = useState<QueryResult>();
  const filter = params && params.type ? params.type : 'characters';

  const extactKey = (item: Character & Location & Episode) => {
    return item.id.toString();
  };

  const handleOnEndReached = () => {
    if (!results) {
      return;
    }

    if (results.data[filter].info.next === null) {
      return;
    }

    results.fetchMore({
      variables: { page: results.data[filter].info.next },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return {
          [filter]: {
            __typename: fetchMoreResult[filter].__typename,
            info: { ...fetchMoreResult[filter].info },
            results: [
              ...prev[filter].results,
              ...fetchMoreResult[filter].results,
            ],
          },
        };
      },
    });
  };

  return (
    <View>
      <Header>
        <SearchBar type={filter} setResults={setResults} />
      </Header>
      <View style={styles.container}>
        {results && results.data ? (
          <FlatList
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item: Character & Location & Episode) =>
              extactKey(item)
            }
            data={
              results && results.data && results.data[filter]
                ? results?.data[filter].results
                : null
            }
            onEndReached={handleOnEndReached}
            renderItem={(data) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Card navigation={navigation} data={data.item} type={filter} />
              </View>
            )}
          />
        ) : null}
      </View>
    </View>
  );
};
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

export default Results;
