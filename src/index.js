import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Screen from './screen';

import I18n from './I18n';
import {generalAction} from './actions/ServiceAction';
import {CHANGE_DIRECTION} from './actions/ActionTypes';

export default class App extends Component {
  componentDidMount() {
    console.log('componentDidMount chala ');
    console.log(
      'componentDidMount chala langDirection',
      store.getState().langDirection,
    );
  }
  state = {isReduxLoaded: false};
  onBeforeLift = () => {
    // setting backing previous state where user left
    I18n.locale = store.getState().langDirection.lang;
    store.dispatch(
      generalAction(CHANGE_DIRECTION, {
        RTL: store.getState().langDirection.rtl,
        lang: store.getState().langDirection.lang,
      }),
    );
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
