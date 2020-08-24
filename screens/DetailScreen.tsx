import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import CharacterDetail from '../components/CharacterDetail';
import LocationDetail from '../components/LocationDetail';
import EpisodeDetail from '../components/EpisodeDetail';

interface DetailProp {
  route: {
    params: {
      id: number;
      type: 'character' | 'location' | 'episode';
    };
  };
}

type Props = DetailProp;

const DetailScreen = (props: Props) => {
  const type = props.route.params.type;

  const query = gql`
  query {
    ${type}(id: ${props.route.params.id}) {
      id
      name
      ${type === 'character' ? 'image gender type species' : ''}
      ${type === 'location' ? 'dimension type residents { id name image }' : ''}
      ${
        type === 'episode'
          ? 'episode air_date characters { id name image }'
          : ''
      }
    }
  }
  `;

  console.log(query);

  const { loading, error, data } = useQuery(query);

  const renderItem = () => {
    if (loading)
      return (
        <ActivityIndicator style={styles.activityIndicator} size="large" />
      );

    if (error) {
      return (
        <Text style={styles.detailContainerText}>Error: {error.message}</Text>
      );
    }

    if (props.route.params.type === 'character') {
      if (data.character) {
        return <CharacterDetail character={data.character} />;
      }
    }

    if (props.route.params.type === 'location') {
      if (data.location) {
        return <LocationDetail location={data.location} />;
      }
    }

    if (props.route.params.type === 'episode') {
      if (data.episode) {
        return <EpisodeDetail episode={data.episode} />;
      }
    }
  };

  return <View style={styles.detailContainer}>{renderItem()}</View>;
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#1A202C',
    height: '100%',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 10,
  },
  detailContainerText: {
    color: 'white',
    marginTop: 10,
  },
});

export default DetailScreen;
