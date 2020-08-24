import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Character from '../types/Character';
import Location from '../types/Location';
import Episode from '../types/Episode';

interface CardProps {
  character?: Character;
  location?: Location;
  episode?: Episode;
}

type Props = CardProps;

const Card = ({ character, location, episode }: Props) => {
  return (
    <>
      {character && (
        <View key={character.id} style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{character.name}</Text>
          </View>
        </View>
      )}
      {location && (
        <View key={location.id} style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{location.name}</Text>
            <Text style={styles.text}>{location.dimension}</Text>
            <Text style={styles.text}>{location.id}</Text>
          </View>
        </View>
      )}
      {episode && (
        <View key={episode.id} style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{episode.name}</Text>
            <Text style={styles.text}>{episode.episode}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: 450,
    width: '93%',
    backgroundColor: '#4a5568',
    marginVertical: 20,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
  text: {
    color: 'white',
    marginTop: 25,
  },
});

export default Card;
