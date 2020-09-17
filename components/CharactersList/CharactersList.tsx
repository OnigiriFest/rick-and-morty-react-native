import React from 'react';
import { Image, Text, View } from 'react-native';
import Character from '../../types/Character';
import styles from './CharacterListStyle';

interface Props {
  characters: Character[] | undefined;
}

const CharactersList = ({ characters }: Props) => {
  if (!characters) {
    return null;
  }

  let charactersToDisplay = [...characters];
  charactersToDisplay = charactersToDisplay.splice(0, 5);

  const renderList = () =>
    charactersToDisplay.map((character) => (
      <View key={character.id} style={styles.listItem}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.title}>{character.name}</Text>
      </View>
    ));

  return <View style={styles.listContainer}>{renderList()}</View>;
};

export default CharactersList;
