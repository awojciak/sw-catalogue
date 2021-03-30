import { Character } from '../../api/models';
import * as C from './constants';

export const listingFirstPageNoFilterRequest = (): C.ListingAction => ({
    type: C.ListingActionType.ListingFirstPageNoFilterRequest,
});

export const listingFirstPageSearchFilterRequest = (search: string): C.ListingAction => ({
    type: C.ListingActionType.ListingFirstPageSearchFilterRequest,
    search,
});

export const listingFirstPageFilmFilterRequest = (film: number): C.ListingAction => ({
    type: C.ListingActionType.ListingFirstPageFilmFilterRequest,
    film,
});

export const listingNextPageRequest = (): C.ListingAction => ({
    type: C.ListingActionType.ListingNextPageRequest,
});

export const listingFirstPageSuccess = (characters: Character[], total: number): C.ListingAction => ({
    type: C.ListingActionType.ListingFirstPageSuccess,
    characters,
    total,
});

export const listingNextPageSuccess = (characters: Character[]): C.ListingAction => ({
    type: C.ListingActionType.ListingNextPageSuccess,
    characters,
});

export const listingFail = (): C.ListingAction => ({
    type: C.ListingActionType.ListingFail,
});