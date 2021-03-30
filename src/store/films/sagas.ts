import { call, put, takeEvery } from "redux-saga/effects";
import { getFilms } from "../../api/requests";
import * as A from './actions';
import * as C from './constants';

export function* getFilmsWorker() {
    try {
        const { data: { results }} = yield call(getFilms);
        yield put(A.filmsSuccess(results));
    } catch (error) {
        yield put(A.filmsFail());
    }
};

export function* getFilmsWatcher() {
    yield takeEvery(C.FilmsActionType.FilmsRequest, getFilmsWorker);
};
