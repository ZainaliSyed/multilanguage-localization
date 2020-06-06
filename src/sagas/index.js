import {fork} from 'redux-saga/effects';
import init from './init';

export default function* root() {
  yield fork(init);
}
