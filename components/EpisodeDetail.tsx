import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CharactersList from './CharactersList';
import Episode from '../types/Episode';

interface EpisodeDetailProps {
  episode: Episode;
}

type Props = EpisodeDetailProps;

const EpisodeDetail = ({ episode }: Props) => {
  return (
    <ScrollView
      style={styles.cardContainer}
      contentContainerStyle={styles.cardContainerContent}>
      <View style={styles.card}>
        <View>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{episode.name}</Text>
            <Text style={styles.text}>Episode: {episode.episode}</Text>
            {episode.air_date && (
              <Text style={styles.text}>Air Date: {episode.air_date}</Text>
            )}
            <Text style={styles.text}>Characters:</Text>
            <CharactersList characters={episode.characters} />
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

export default EpisodeDetail;
