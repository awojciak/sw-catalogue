import { all, fork } from 'redux-saga/effects';
import { getFilmsWatcher } from './films/sagas';
import { getCharactersWatcher } from './listing/sagas';

function* rootSaga() {
    yield all([
        fork(getFilmsWatcher),
        fork(getCharactersWatcher),
    ]);
}

export default rootSaga;