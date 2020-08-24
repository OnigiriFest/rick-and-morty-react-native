import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Filters from '../types/Filter';

interface FilterMenuProps {
  setFilter: (filter: Filters) => void;
}

type Props = FilterMenuProps;

const FilterMenu = ({ setFilter }: Props) => {
  return (
    <View style={styles.filterMenu}>
      <View style={styles.filterItem}>
        <Button
          color="#11b0c8"
          title="Characters"
          onPress={() => setFilter('characters')}
        />
      </View>
      <View style={styles.filterItem}>
        <Button
          color="#11b0c8"
          title="Locations"
          onPress={() => setFilter('locations')}
        />
      </View>
      <View style={styles.filterItem}>
        <Button
          color="#11b0c8"
          title="Episodes"
          onPress={() => setFilter('episodes')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterMenu: {
    height: '10%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterItem: {
    width: '33%',
  },
});

export default FilterMenu;
