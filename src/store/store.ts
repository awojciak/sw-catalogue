import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import filmsReducer from './films/reducers';
import listingReducer from './listing/reducers';
import rootSaga from './rootSaga';

const makeStore = () => {
    const saga: SagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: {
            films: filmsReducer,
            listing: listingReducer,
        },
        middleware: [...getDefaultMiddleware({ thunk: false }), saga],
    });

    (store as any).sagaTask = saga.run(rootSaga);

    return store;
}

export default makeStore;
