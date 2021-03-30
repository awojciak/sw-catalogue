import axios from 'axios';
import { call, put, takeEvery, all, select, take } from "redux-saga/effects";
import { Character } from '../../api/models';
import { getFirstPageOfCharacters, getCharacter, getCharactersFromSearch } from "../../api/requests";
import { FilmsActionType } from '../films/constants';
import { filmCharactersSelector, filmsTitlesSelector } from '../films/selectors';
import * as A from './actions';
import * as C from './constants';
import { characterSelector, currentCharactersLengthSelector, filmSelector, filterSelector, searchSelector, totalSelector } from './selectors';

const min = (a: number, b: number) => a < b ? a : b;

export function* getFirstPage(action: C.ListingAction) {
    try {
        let characters: Character[];
        let total: number;

        if (action.type === C.ListingActionType.ListingFirstPageSearchFilterRequest) {
            const { data: { results, count }} = yield call(getCharactersFromSearch, action.search, 1);
            characters = results;
            total = count;
        } else if (action.type === C.ListingActionType.ListingFirstPageFilmFilterRequest) {
            const links: string[] = yield select(filmCharactersSelector(action.film));
            characters = [];
            total = links.length;

            for (let i = 0; i < 10; i++) {
                const { data } = yield call(axios.get, links[i]);
                characters.push(data);
            }
        } else {
            const { data: { results, count }} = yield call(getFirstPageOfCharacters);
            characters = results;
            total = count;
        }

        let titles: string[] = yield select(filmsTitlesSelector);

        if (titles.length === 0) {
            yield take(FilmsActionType.FilmsSuccess);
            titles = yield select(filmsTitlesSelector);
        }

        characters = characters.map((character) => {
            return {
                ...character,
                films: character.films.map((link) => {
                    const elements = link.split('/');
                    
                    return titles[+elements[5]-1];
                })
            }
        });

        yield put(A.listingFirstPageSuccess(characters, total))
    } catch (error) {
        yield put(A.listingFail());
    }
}

export function* getNextPage() {
    try {
        const filter: string = yield select(filterSelector);
        const currentLength: number = yield select(currentCharactersLengthSelector);
        const total: number = yield select(totalSelector);

        let characters: Character[];

        if (filter === 'name') {
            const search: string = yield select(searchSelector);
            const { data: { results }} = yield call(getCharactersFromSearch, search, currentLength/10 + 1);
            characters = results;
        } else if (filter === 'film') {
            const film: number = yield select(filmSelector);
            characters = [];
            const links: string[] = yield select(filmCharactersSelector(film));

            for (let i = currentLength; i < min(currentLength+5, total); i++) {
                const { data } = yield call(axios.get, links[i]);
                characters.push(data);
            }
        } else {
            characters = [];

            const lastCharacter: Character = yield select(characterSelector(currentLength-1));

            let i = +(lastCharacter.url.split('/')[5]);

            while (characters.length !== 5 && i < min(currentLength+5, total)) {
                try {
                    const { data } = yield call(getCharacter, i+1);
                    characters.push(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    i++;
                }
            }
        }

        const titles: string[] = yield select(filmsTitlesSelector);

        characters = characters.map((character) => {
            return {
                ...character,
                films: character.films.map((link) => {
                    const elements = link.split('/');
                    
                    return titles[+elements[5]-1];
                })
            }
        });

        yield put(A.listingNextPageSuccess(characters));
    } catch (error) {
        yield put(A.listingFail());
    }
}

export function* getCharactersWatcher() {
    yield all([
        takeEvery([
            C.ListingActionType.ListingFirstPageNoFilterRequest,
            C.ListingActionType.ListingFirstPageSearchFilterRequest,
            C.ListingActionType.ListingFirstPageFilmFilterRequest,
        ], getFirstPage),
        takeEvery(C.ListingActionType.ListingNextPageRequest, getNextPage),
    ]);
}