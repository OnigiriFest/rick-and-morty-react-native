import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Character from '../types/Character';
import Location from '../types/Location';
import Episode from '../types/Episode';

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
        <View key={data.id} style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                id: data.id,
                type: 'character',
              })
            }>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View key={data.id} style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                id: data.id,
                type: type === 'locations' ? 'location' : 'episode',
              })
            }>
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{data.name}</Text>
              <Text style={styles.text}>
                {data.dimension ? data.dimension : data.episode}
              </Text>
            </View>
          </TouchableOpacity>
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
