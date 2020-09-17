import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './WelcomeScreenStyle';

interface Props {
  navigation: any;
}

const WelcomeScreen = ({ navigation }: Props) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
      <Text style={styles.text}>Facundo Panizza</Text>
    </View>
    <View>
      <Button title="ENTER" onPress={() => navigation.navigate('Results')} />
    </View>
  </View>
);

export default WelcomeScreen;
