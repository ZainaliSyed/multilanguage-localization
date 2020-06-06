import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Screen from './screen';

export default class App extends Component {
  state = {isReduxLoaded: false};
  onBeforeLift = () => {
    this.setState({isReduxLoaded: true}, () => {});
  };
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
          <Screen />
        </PersistGate>
      </Provider>
    );
  }
}
