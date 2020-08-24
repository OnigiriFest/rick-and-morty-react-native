import React from 'react';
import { StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Results from './screens/ResultsSreen';
import DetailScreen from './screens/DetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
