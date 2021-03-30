import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterByFilm from './components/FilterByFilm/FilterByFilm';
import Search from './components/Search/Search';
import Tile from './components/Tile/Tile';
import * as P from './parts';
import { filmsRequest } from './store/films/actions';
import { filmsTitlesSelector, isLoadingSelector } from './store/films/selectors';
import { listingFirstPageFilmFilterRequest, listingFirstPageNoFilterRequest, listingFirstPageSearchFilterRequest, listingNextPageRequest } from './store/listing/actions';
import { charactersSelector, currentCharactersLengthSelector, filterSelector, isLoadingCharactersNextPageSelector, isLoadingCharactersSelector, totalSelector } from './store/listing/selectors';
import RingLoader from 'react-spinners/RingLoader';

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filmsRequest());
		dispatch(listingFirstPageNoFilterRequest());
	}, [dispatch]);

	let isLoadingFilms = useSelector(isLoadingSelector);
	let isLoadingCharacters = useSelector(isLoadingCharactersSelector);
	let isLoadingCharactersNextPage = useSelector(isLoadingCharactersNextPageSelector);

	let films = useSelector(filmsTitlesSelector);
	let characters = useSelector(charactersSelector);

	let filter = useSelector(filterSelector);

	let total = useSelector(totalSelector);
	let currentLength = useSelector(currentCharactersLengthSelector);

	useEffect(() => {
		if (('IntersectionObserver' in window) && (characters.length !== 0)) {
			const config = {
				root: null,
				rootMargin: '0px',
				threshold: 0.5
			};

			const moreButton: Element | null = document.querySelector('#moreButton');

			if (moreButton !== null) {
				const onChange: IntersectionObserverCallback = (changes) => {
					changes.forEach((change) => {
						if (change.intersectionRatio > 0) {
							dispatch(listingNextPageRequest());
						}
					});
				};
	
				const observer = new IntersectionObserver(onChange, config);
				observer.observe(moreButton);
			}
		}
	}, [characters, dispatch]);

	return (
		<P.Wrapper>
			<P.FiltersContainer>
				{filter !== 'none' && <P.ReturnButton onClick={(e) => { dispatch(listingFirstPageNoFilterRequest()); }}>List without filter</P.ReturnButton>}
				<P.FilterBox><b>Current filter: </b>{filter}</P.FilterBox>
				<Search submitCallback={(search) => { dispatch(listingFirstPageSearchFilterRequest(search) ); }} />
				{
					!isLoadingFilms
						? <FilterByFilm submitCallback={(film) => { dispatch(listingFirstPageFilmFilterRequest(film)); }} films={films} />
						: <RingLoader color="#FFE300" />
				}
			</P.FiltersContainer>
			<P.ListContainer>
				{
					!isLoadingCharacters
					? (
						<>
							{characters.map((c, index) => <Tile key={index} {...c} />)}
							{
								!isLoadingCharactersNextPage
									? (currentLength < total && <P.MoreButton id='moreButton' onClick={(e) => { dispatch(listingNextPageRequest()); }}>Load more</P.MoreButton>)
									: <RingLoader color="#FFE300" />
							}
						</>
					)
					: <RingLoader color="#FFE300" />
				}
			</P.ListContainer>
		</P.Wrapper>
);
}

export default App;
