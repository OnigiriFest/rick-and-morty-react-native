import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Episode from '../types/Episode';
import Location from '../types/Location';

interface CardProps {
  data: Location & Episode;
  type: 'location' | 'episode';
  navigation: any;
}

const LocationAndEpisodeCard = ({ data, navigation, type }: CardProps) => {
  const onHandlePress = () => {
    navigation.navigate('Details', {
      id: data.id,
      type: type,
    });
  };

  return (
    <View key={data.id} style={styles.card}>
      <TouchableOpacity onPress={onHandlePress}>
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

export default LocationAndEpisodeCard;
