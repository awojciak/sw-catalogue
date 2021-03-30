import { Film } from "../../api/models";
import { ApplicationState } from "../applicationState";

export const isLoadingSelector = (state: ApplicationState): boolean => state.films.isLoading;

export const hasErrorSelector = (state: ApplicationState): boolean => state.films.hasError;

export const filmCharactersSelector = (index: number) => (state: ApplicationState): string[] => state.films.films[index].characters;

export const filmsSelector = (state: ApplicationState): Film[] => state.films.films;

export const filmsTitlesSelector = (state: ApplicationState): string[] => state.films.films.map(film => film.title);
