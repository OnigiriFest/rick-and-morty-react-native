import React from 'react';
import Character from '../types/Character';
import Episode from '../types/Episode';
import Location from '../types/Location';
import CharacterCard from './CharacterCard';
import LocationAndEpisodeCard from './LocationAndEpisodeCard';

interface CardProps {
  data: Character & Location & Episode;
  type: 'characters' | 'locations' | 'episodes';
  navigation: any;
}

type Props = CardProps;

const Card = ({ data, type, navigation }: Props) => {
  return (
    <>
      {type === 'characters' ? (
        <CharacterCard data={data} navigation={navigation} />
      ) : (
        <LocationAndEpisodeCard
          data={data}
          navigation={navigation}
          type={type === 'locations' ? 'location' : 'episode'}
        />
      )}
    </>
  );
};

export default Card;
