import React from 'react';
import { View } from 'react-native';
import styles from './HeaderStyle';

const Header = ({ children }: any) => (
  <View style={styles.header}>{children}</View>
);

export default Header;
