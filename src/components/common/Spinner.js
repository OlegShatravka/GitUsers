import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'large' }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
