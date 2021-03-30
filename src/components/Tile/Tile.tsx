import { useState } from 'react';
import * as P from './parts';

export interface TileProps {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    films: string[];
}

const Tile: React.FC<TileProps> = ({ name, gender, birth_year, height, films }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <P.Container isCollapsed={!isExpanded}>
            <h1>{name}</h1>
            <span><b>Gender: </b>{gender}</span>
            <span><b>Birth year: </b>{birth_year}</span>
            <P.CollapseBox>
                <span><b>Height: </b>{height}</span>
                <span><b>Films: </b></span>
                <ul>
                    {films.map((film, index) => <li key={index}>{film}</li>)}
                </ul>
            </P.CollapseBox>
            <P.MoreButton onClick={onClick}>{isExpanded ? 'Collapse': 'Expand'}</P.MoreButton>
        </P.Container>
    )
};

export default Tile