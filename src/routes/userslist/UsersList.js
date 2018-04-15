import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loadUsers, loadMoreUsers } from '../../actions';
import { Spinner, Error, ListItem } from '../../components/common';

class UsersList extends Component {
  componentWillMount() {
    this.props.loadUsers();
  }

  onRowPress(followersUrl, login) {
    this.props.navigation.navigate('FollowersList', { followersUrl, login });
  }

  onEndReached() {
    if (!this.props.allUsersLoaded) {
      this.props.loadMoreUsers();
    }
  }

  renderRow({ item }) {
    return <ListItem user={item} onPress={this.onRowPress.bind(this)} />;
  }

  render() {
    const { container } = styles;

    const { loading, error, users } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error message={error.message} />;
    }

    if (users && users.length) {
      return (
        <View style={container}>
          <FlatList
            data={users}
            renderItem={this.renderRow.bind(this)}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => this.onEndReached()}
          />
        </View>
      );
    }

    return (
      <View style={container}>
        <Text>No users</Text>
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
  const { users, loading, error, allUsersLoaded } = state.users;
  return { users, loading, error, allUsersLoaded };
};

export default connect(mapStateToProps, { loadUsers, loadMoreUsers })(UsersList);
