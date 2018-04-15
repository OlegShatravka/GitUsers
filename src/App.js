import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

import reducers from './reducers';
import FollowersList from './routes/followerslist/FollowersList';
import UsersList from './routes/userslist/UsersList';

const Routes = StackNavigator(
  {
    UsersList: {
      screen: UsersList,
      navigationOptions: {
        title: 'Users'
      }
    },
    FollowersList: {
      screen: FollowersList
    }
  },
  {
    initialRouteName: 'UsersList'
  }
);

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
