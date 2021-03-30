import { Character } from "../../api/models";

export enum ListingActionType {
    ListingFirstPageNoFilterRequest = 'listing/LISTING_FIRST_PAGE_NO_FILTER_REQUEST',
    ListingFirstPageSearchFilterRequest = 'listing/LISTING_FIRST_PAGE_SEARCH_FILTER_REQUEST',
    ListingFirstPageFilmFilterRequest = 'listing/LISTING_FIRST_PAGE_FILM_FILTER_REQUEST',
    ListingFirstPageSuccess = 'listing/LISTING_FIRST_PAGE_SUCCESS',
    ListingNextPageRequest = 'listing/LISTING_NEXT_PAGE_REQUEST',
    ListingNextPageSuccess = 'listing/LISTING_NEXT_PAGE_SUCCESS',
    ListingFail = 'listing/LISTING_FAIL',
};

export type ListingAction = {
    type: ListingActionType.ListingFirstPageNoFilterRequest,
} | {
    type: ListingActionType.ListingFirstPageSearchFilterRequest,
    search: string,
} | {
    type: ListingActionType.ListingFirstPageFilmFilterRequest,
    film: number,
} | {
    type: ListingActionType.ListingFirstPageSuccess,
    characters: Character[],
    total: number,
} | {
    type: ListingActionType.ListingNextPageRequest,
} | {
    type: ListingActionType.ListingNextPageSuccess,
    characters: Character[],
} | {
    type: ListingActionType.ListingFail,
};

export interface ListingState {
    isLoading: boolean,
    isLoadingNextPage: boolean,
    hasError: boolean,
    characters: Character[],
    total: number,
    filter: 'none' | 'film' | 'name',
    search: string,
    film: number,
};

export const InitialListingState: ListingState = {
    isLoading: false,
    isLoadingNextPage: false,
    hasError: false,
    characters: [],
    total: 0,
    filter: 'none',
    search: '',
    film: 0,
};