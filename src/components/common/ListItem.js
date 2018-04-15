import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';

class ListItem extends Component {
  render() {
    const { avatarStyle, loginStyle, userInfoContainer } = styles;
    const {
      user: { login, html_url: htmUrl, avatar_url: avatarUrl, followers_url: followersUrl },
      onPress
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress(followersUrl, login)} disabled={!onPress}>
        <CardSection>
          <Image style={avatarStyle} source={{ uri: avatarUrl }} />
          <View style={userInfoContainer}>
            <Text style={loginStyle}>{login}</Text>
            <Text>{htmUrl}</Text>
          </View>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    onRowPress: PropTypes.func
  })
};

const styles = StyleSheet.create({
  avatarStyle: {
    width: 100,
    height: 100
  },
  loginStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userInfoContainer: {
    flex: 1,
    paddingLeft: 10
  }
});

export { ListItem };
