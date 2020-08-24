import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Location from '../types/Location';
import CharactersList from './CharactersList';

interface LocationDetailProps {
  location: Location;
}

type Props = LocationDetailProps;

const LocationDetail = ({ location }: Props) => {
  return (
    <ScrollView
      style={styles.cardContainer}
      contentContainerStyle={styles.cardContainerContent}>
      <View style={styles.card}>
        <View>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{location.name}</Text>
            <Text style={styles.text}>Dimension: {location.dimension}</Text>
            {location.type ? (
              <Text style={styles.text}>Gender: {location.type}</Text>
            ) : null}
            <Text style={styles.text}>Residents:</Text>
            <CharactersList characters={location.residents} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default LocationDetail;
