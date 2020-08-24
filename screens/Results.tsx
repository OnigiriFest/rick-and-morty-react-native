import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import { QueryResult } from '@apollo/client';

import FilterMenu from '../components/FilterMenu';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

import Filter from '../types/Filter';
import Character from '../types/Character';
import Location from '../types/Location';
import Episode from '../types/Episode';

const Results = () => {
  const [results, setResults] = useState<QueryResult>();
  const [filter, setFilter] = useState<Filter>('characters');

  const renderResults = () => {
    if (results?.loading)
      return (
        <ActivityIndicator style={styles.activityIndicator} size="large" />
      );

    if (results?.error) {
      return (
        <Text style={styles.resultsContainerText}>
          Error: {results.error.message}
        </Text>
      );
    }

    if (filter === 'characters') {
      if (results?.data.characters) {
        return results?.data.characters.results.map((character: Character) => {
          return <Card key={character.id} character={character} />;
        });
      }
    }

    if (filter === 'locations') {
      if (results?.data.locations) {
        return results?.data.locations.results.map((location: Location) => {
          return <Card key={location.id} location={location} />;
        });
      }
    }

    if (filter === 'episodes') {
      if (results?.data.episodes) {
        return results?.data.episodes.results.map((episode: Episode) => {
          return <Card key={episode.id} episode={episode} />;
        });
      }
    }

    return (
      <View>
        <Text style={styles.resultsContainerText}>
          Welcome!, search something about Rick and Morty to start.
        </Text>
      </View>
    );
  };

  let scrollView: ScrollView | null;

  return (
    <View>
      <Header>
        <SearchBar type={filter} setResults={setResults} />
      </Header>
      <ScrollView
        ref={(scroll) => (scrollView = scroll)}
        style={styles.resultsContainer}
        contentContainerStyle={styles.contentContainer}>
        {renderResults()}
        {!results?.loading && results?.data[filter] ? (
          <View style={styles.paginationContainer}>
            {results?.data[filter].info.prev === null ? (
              <View></View>
            ) : (
              <Button
                title="<"
                onPress={() => {
                  results?.fetchMore({
                    variables: { page: results?.data[filter].info.prev },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      return fetchMoreResult;
                    },
                  });

                  scrollView?.scrollTo({ y: 0 });
                }}
              />
            )}

            {results?.data[filter].info.next === null ? (
              <View></View>
            ) : (
              <Button
                title=">"
                onPress={() => {
                  results?.fetchMore({
                    variables: { page: results?.data[filter].info.next },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      return fetchMoreResult;
                    },
                  });

                  scrollView?.scrollTo({ y: 0 });
                }}
              />
            )}
          </View>
        ) : null}
      </ScrollView>
      <FilterMenu setFilter={setFilter} />
    </View>
  );
};
const styles = StyleSheet.create({
  resultsContainer: {
    backgroundColor: '#1A202C',
    height: '75%',
  },
  contentContainer: {
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
