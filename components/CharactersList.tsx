import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Character from '../types/Character';

interface CharactersListProps {
  characters: Character[] | undefined;
}

type Props = CharactersListProps;

const CharactersList = ({ characters }: Props) => {
  if (!characters) {
    return null;
  }

  let charactersToDisplay = [...characters];
  charactersToDisplay = charactersToDisplay.splice(0, 5);

  const renderList = () => {
    return charactersToDisplay.map((character) => {
      return (
        <View key={character.id} style={styles.listItem}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <Text style={styles.title}>{character.name}</Text>
        </View>
      );
    });
  };

  return <View style={styles.listContainer}>{renderList()}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#1A202C',
    borderRadius: 20,
  },
  image: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 150,
    width: 150,
    marginRight: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default CharactersList;
