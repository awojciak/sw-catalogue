import { Character } from "../../api/models";
import { ApplicationState } from "../applicationState";

export const filterSelector = (state: ApplicationState): string => state.listing.filter;

export const searchSelector = (state: ApplicationState): string => state.listing.search;

export const totalSelector = (state: ApplicationState): number => state.listing.total;

export const filmSelector = (state: ApplicationState): number => state.listing.film;

export const currentCharactersLengthSelector = (state: ApplicationState): number => state.listing.characters.length;

export const charactersSelector = (state: ApplicationState): Character[] => state.listing.characters;

export const characterSelector = (index: number) => (state: ApplicationState): Character => state.listing.characters[index];

export const isLoadingCharactersSelector = (state: ApplicationState): boolean => state.listing.isLoading;

export const isLoadingCharactersNextPageSelector = (state: ApplicationState): boolean => state.listing.isLoadingNextPage;