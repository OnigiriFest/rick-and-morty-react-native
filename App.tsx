import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import Results from './screens/ResultsScreen/ResultsSreen';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const Tab = createBottomTabNavigator();

function SearchTab() {
  return (
    <Tab.Navigator tabBarOptions={{ keyboardHidesTabBar: true }}>
      <Tab.Screen
        name="Characters"
        component={Results}
        initialParams={{ type: 'characters' }}
        options={{
          tabBarLabel: 'Characeters',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Results}
        initialParams={{ type: 'locations' }}
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: ({ color }) => (
            <AntDesign name="earth" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={Results}
        initialParams={{ type: 'episodes' }}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: ({ color }) => (
            <AntDesign name="videocamera" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Results" component={SearchTab} />
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
