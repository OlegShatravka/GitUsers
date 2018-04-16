import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loadFollowers, loadMoreFollowers, resetFollowers } from '../../actions';
import { Spinner, LoadMoreSpinner, Error, ListItem } from '../../components/common';

class FollowersList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { login } = navigation.state.params;

    return {
      title: `${login} followers`
    };
  };

  componentWillMount() {
    const { followersUrl } = this.props.navigation.state.params;
    this.props.loadFollowers({ followersUrl });
  }

  componentWillUnmount() {
    this.props.resetFollowers();
  }

  onEndReached() {
    if (!this.props.allFollowersLoaded) {
      this.props.loadMoreFollowers();
    }
  }

  renderRow({ item }) {
    return <ListItem user={item} />;
  }

  render() {
    const { container } = styles;
    const { loading, error, followers, showLoadMoreFollowersSpinner } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error message={error.message} />;
    }

    if (followers && followers.length) {
      return (
        <View style={container}>
          <FlatList
            data={followers}
            renderItem={this.renderRow.bind(this)}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => this.onEndReached()}
          />
          <LoadMoreSpinner visible={showLoadMoreFollowersSpinner} />
        </View>
      );
    }

    return (
      <View style={container}>
        <Text>No followers</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  const {
    followers,
    loading,
    error,
    allFollowersLoaded,
    showLoadMoreFollowersSpinner
  } = state.followers;
  return { followers, loading, error, allFollowersLoaded, showLoadMoreFollowersSpinner };
};

export default connect(mapStateToProps, { loadFollowers, loadMoreFollowers, resetFollowers })(
  FollowersList
);
