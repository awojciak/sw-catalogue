import * as C from './constants';

export const filmsReducer = (state = C.InitialFilmsState, action: C.FilmsAction): C.FilmsState => {
    switch (action.type) {
        case C.FilmsActionType.FilmsRequest:
            return {
                ...state,
                isLoading: true,
            };
        case C.FilmsActionType.FilmsSuccess:
            return {
                isLoading: false,
                hasError: false,
                films: action.films,
            };
        case C.FilmsActionType.FilmsFail:
            return {
                ...state,
                hasError: true,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default filmsReducer;