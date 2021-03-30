import { useState } from 'react';
import * as P from './parts';

export interface FilterByFilmProps {
    submitCallback: (film: number) => void;
    films: string[];
}

const FilterByFilm: React.FC<FilterByFilmProps> = ({ submitCallback, films }) => {
    const [film, setFilm] = useState<number>(0);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        submitCallback(film);
        event.preventDefault()
    }

    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setFilm(+event.target.value);
    }

    return (
        <P.Container onSubmit={onSubmit}>
            <h1>Filter by film</h1>
            <select value={films[film-1]} onChange={onChange}>
                {films.map((film, index) => <option value={index} key={index}>{film}</option>)}
            </select>
            <P.SubmitButton>Filter</P.SubmitButton>
        </P.Container>
    );
}

export default FilterByFilm;