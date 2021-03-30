import { Film } from '../../api/models';
import * as C from './constants';

export const filmsRequest = (): C.FilmsAction => ({
    type: C.FilmsActionType.FilmsRequest,
});

export const filmsSuccess = (films: Film[]): C.FilmsAction => ({
    type: C.FilmsActionType.FilmsSuccess,
    films,
});

export const filmsFail = (): C.FilmsAction => ({
    type: C.FilmsActionType.FilmsFail,
});