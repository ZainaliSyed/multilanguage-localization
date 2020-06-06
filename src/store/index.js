import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-community/async-storage';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

/* redux logger config */
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

/* redux persist config */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

/* saga config */
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);
const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);

export {store, persistor};
