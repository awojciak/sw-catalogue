import { useState } from 'react';
import * as P from './parts';

export interface SearchProps {
    submitCallback: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ submitCallback }) => {
    const [search, setSearch] = useState<string>('');

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        submitCallback(search);
        event.preventDefault()
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value);
    }

    return (
        <P.Container onSubmit={onSubmit}>
            <h1>Search by name</h1>
            <input value={search} onChange={onChange}/>
            <P.SubmitButton>Search</P.SubmitButton>
        </P.Container>
    );
}

export default Search;