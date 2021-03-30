import * as C from './constants';

export const listingReducer = (state = C.InitialListingState, action: C.ListingAction): C.ListingState => {
    switch (action.type) {
        case C.ListingActionType.ListingFirstPageNoFilterRequest:
            return {
                ...state,
                isLoading: true,
                filter: 'none',
            };
        case C.ListingActionType.ListingFirstPageSearchFilterRequest:
            return {
                ...state,
                isLoading: true,
                filter: 'name',
                search: action.search,
            };
        case C.ListingActionType.ListingFirstPageFilmFilterRequest:
            return {
                ...state,
                isLoading: true,
                filter: 'film',
                film: action.film,
            };
        case C.ListingActionType.ListingNextPageRequest:
            return {
                ...state,
                isLoadingNextPage: true,
            };
        case C.ListingActionType.ListingFirstPageSuccess:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                characters: action.characters,
                total: action.total,
            };
        case C.ListingActionType.ListingNextPageSuccess:
            return {
                ...state,
                isLoadingNextPage: false,
                hasError: false,
                characters: [...state.characters, ...action.characters],
            };
        case C.ListingActionType.ListingFail:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        default:
            return state;
    }
};

export default listingReducer;