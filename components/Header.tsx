import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = (props: any) => {
  return <View style={styles.header}>{props.children}</View>;
};

const styles = StyleSheet.create({
  header: {
    height: '11%',
    minHeight: 64,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default Header;
