import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Spinner } from './Spinner';

const LoadMoreSpinner = ({ visible = false, size }) => {
  if (visible) {
    return (
      <View style={styles.container}>
        <Spinner size={size} />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: 'white'
  }
});

export { LoadMoreSpinner };
