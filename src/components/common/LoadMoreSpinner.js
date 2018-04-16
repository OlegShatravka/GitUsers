import React from 'react';
import PropTypes from 'prop-types';
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

LoadMoreSpinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
