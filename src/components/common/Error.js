import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Error = ({ message }) => (
  <View style={styles.container}>
    <Text>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Error };
