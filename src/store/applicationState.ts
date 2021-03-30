import { FilmsState } from "./films/constants";
import { ListingState } from "./listing/constants";

export interface ApplicationState {
    films: FilmsState;
    listing: ListingState;
}