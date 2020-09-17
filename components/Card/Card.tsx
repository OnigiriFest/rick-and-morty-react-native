import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Character from '../../types/Character';
import Episode from '../../types/Episode';
import Location from '../../types/Location';
import styles from './CardStyle';

interface Props {
  data: Character & Location & Episode;
  type: 'characters' | 'locations' | 'episodes';
  navigation: any;
}

const Card = ({ data, type, navigation }: Props) => {
  const onPressCard = () => {
    let detailType: 'character' | 'location' | 'episode';

    if (type === 'characters') {
      detailType = 'character';
    } else if (type === 'locations') {
      detailType = 'location';
    } else {
      detailType = 'episode';
    }

    navigation.navigate('Details', {
      id: data.id,
      type: detailType,
    });
  };

  const renderCharacterInfo = () => {
    return (
      <View key={data.id} style={styles.card}>
        <TouchableOpacity onPress={onPressCard}>
          <Image source={{ uri: data.image }} style={styles.image} />
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEpisodeOrLocationInfo = () => {
    return (
      <View key={data.id} style={styles.card}>
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.text}>
              {data.dimension ? data.dimension : data.episode}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {type === 'characters'
        ? renderCharacterInfo()
        : renderEpisodeOrLocationInfo()}
    </>
  );
};

export default Card;
