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

  const queryType = () => {
    switch (type) {
      case 'character':
        return 'image gender type species';
      case 'location':
        return 'dimension type residents { id name image }';
      case 'episode':
        return 'episode air_date characters { id name image }';
      default:
        return '';
    }
  };

  const query = gql`
  query {
    ${type}(id: ${props.route.params.id}) {
      id
      name
      ${queryType()}
    }
  }
  `;

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

    if (type === 'character' && data.character) {
      return <CharacterDetail character={data.character} />;
    }

    if (type === 'location' && data.location) {
      return <LocationDetail location={data.location} />;
    }

    if (type === 'episode' && data.episode) {
      return <EpisodeDetail episode={data.episode} />;
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
