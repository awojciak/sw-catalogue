import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 8px;
    margin-bottom: 8px;

    border: 1px solid #FFE300;

    width: 100%;

    h1 {
        font-size: 24px;
    }

    input {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
    }
`;

export const SubmitButton = styled.button`
    color: #FFE300;
    background-color: black;

    border: 3px solid #FFE300;

    padding: 12px;
    margin-top: 8px;

    font-size: 16px;

    &:hover {
        background-color: #FFE300;
        color: black;
    }
`;