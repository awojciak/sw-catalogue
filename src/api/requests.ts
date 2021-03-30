import axios from 'axios';
import { Film, Character } from './models';

export const getFilms = () => axios.get<Film[]>('https://swapi.dev/api/films');

export const getFirstPageOfCharacters = () => axios.get<Character[]>('https://swapi.dev/api/people');

export const getCharacter = (index: number) => axios.get<Character>('https://swapi.dev/api/people/' + index);

export const getCharactersFromSearch = (search: string, page: number) => axios.get<Character>('https://swapi.dev/api/people/?search=' + search + '&page=' + page);
