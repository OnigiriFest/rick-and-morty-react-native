import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Header = (props: any) => {
  return <View style={styles.header}>{props.children}</View>;
};

const styles = StyleSheet.create({
  header: {
    height: '15%',
    minHeight: 102,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
});

export default Header;
