import { Film } from "../../api/models";

export enum FilmsActionType {
    FilmsRequest = 'films/FILMS_REQUEST',
    FilmsSuccess = 'films/FILMS_SUCCESS',
    FilmsFail = 'films/FILMS_FAIL',
};

export type FilmsAction = {
    type: FilmsActionType.FilmsRequest,
} | {
    type: FilmsActionType.FilmsSuccess,
    films: Film[]
} | {
    type: FilmsActionType.FilmsFail,
};

export interface FilmsState {
    isLoading: boolean,
    hasError: boolean,
    films: Film[],
};

export const InitialFilmsState: FilmsState = {
    isLoading: false,
    hasError: false,
    films: [],
};
