import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;

    padding: 16px;
    margin-right: 16px;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;

    padding: 16px;
`;

export const MoreButton = styled.button`
    color: #FFE300;
    background-color: black;

    border: 3px solid #FFE300;

    padding: 12px;

    font-size: 16px;

    margin: 0 auto;

    &:hover {
        background-color: #FFE300;
        color: black;
    }
`;

export const ReturnButton = styled.button`
    color: #FFE300;
    background-color: black;

    border: 3px solid #FFE300;

    padding: 12px;
    margin-bottom: 8px;

    font-size: 16px;

    width: 100%;

    &:hover {
        background-color: #FFE300;
        color: black;
    }
`;

export const FilterBox = styled.div`
    padding: 8px;
    margin-bottom: 8px;

    border: 1px solid #FFE300;

    font-size: 24px;

    text-align: center;

    width: 100%;
`;
