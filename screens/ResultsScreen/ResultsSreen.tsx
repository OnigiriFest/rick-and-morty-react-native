import { QueryResult } from '@apollo/client';
import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Character from '../../types/Character';
import Episode from '../../types/Episode';
import Location from '../../types/Location';
import styles from './ResultsScreenStyles';

interface Props {
  navigation: any;
  route: any;
}

const Results = ({ route: { params }, navigation }: Props) => {
  const [results, setResults] = useState<QueryResult>();
  const filter = params && params.type ? params.type : 'characters';

  const extactKey = (item: Character & Location & Episode) =>
    item.id.toString();

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
        {results && results.data && (
          <FlatList
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item: Character & Location & Episode) =>
              extactKey(item)
            }
            data={
              results &&
              results.data &&
              results.data[filter] &&
              results?.data[filter].results
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
        )}
      </View>
    </View>
  );
};

export default Results;
