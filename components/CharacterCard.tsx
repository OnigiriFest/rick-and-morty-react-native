import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Character from '../types/Character';

interface CardProps {
  data: Character;
  navigation: any;
}

const CharacterCard = ({ data, navigation }: CardProps) => {
  const onHandlePress = () => {
    navigation.navigate('Details', {
      id: data.id,
      type: 'character',
    });
  };

  return (
    <View key={data.id} style={styles.card}>
      <TouchableOpacity onPress={onHandlePress}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
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
});

export default CharacterCard;
