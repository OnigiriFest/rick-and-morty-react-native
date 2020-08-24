import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface WelcomeScreenProps {
  navigation: any;
}

type Props = WelcomeScreenProps;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A202C',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
  text: {
    color: 'white',
    marginTop: 15,
  },
});

export default WelcomeScreen;
