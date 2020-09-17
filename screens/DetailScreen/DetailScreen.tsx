import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import CharactersList from '../../components/CharactersList/CharactersList';
import Character from '../../types/Character';
import styles from './DetailScreenStyle';

interface Props {
  route: {
    params: {
      id: number;
      type: 'character' | 'location' | 'episode';
    };
  };
}

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

  const renderCharacterInfo = (character: Character) => {
    let gender = character.species ? (
      <Text key="gender" style={styles.text}>
        Gender: {character.gender}
      </Text>
    ) : null;

    let species = character.species ? (
      <Text key="species" style={styles.text}>
        Specie: {character.species}
      </Text>
    ) : null;

    let type = character.type ? (
      <Text key="type" style={styles.text}>
        Type: {character.type}
      </Text>
    ) : null;

    return (
      <>
        {gender}
        {species}
        {type}
      </>
    );
  };

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

    let { character, location, episode } = data;

    if (type === 'character' && character) {
      return (
        <>
          <Image source={{ uri: data.character.image }} style={styles.image} />
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{data.character.name}</Text>
            {renderCharacterInfo(character)}
          </View>
        </>
      );
    }

    if (type === 'location' && location) {
      return (
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{location.name}</Text>
          <Text style={styles.text}>Dimension: {location.dimension}</Text>
          {location.type && (
            <Text style={styles.text}>Gender: {location.type}</Text>
          )}
          <Text style={styles.text}>Residents:</Text>
          <CharactersList characters={location.residents} />
        </View>
      );
    }

    if (type === 'episode' && data.episode) {
      return (
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{episode.name}</Text>
          <Text style={styles.text}>Episode: {episode.episode}</Text>
          {episode.air_date && (
            <Text style={styles.text}>Air Date: {episode.air_date}</Text>
          )}
          <Text style={styles.text}>Characters:</Text>
          <CharactersList characters={episode.characters} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={styles.cardContainerContent}>
        <View style={styles.card}>
          <View>{renderItem()}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
