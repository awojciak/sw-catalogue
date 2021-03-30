import styled, { css } from 'styled-components';

export const Container = styled.div<{ isCollapsed: boolean }>`
    display: flex;
    flex-direction: column;

    padding: 20px;
    margin-bottom: 8px;

    border: 1px solid #FFE300;

    width: 100%;

    max-height: 245px;
    transition: max-height 1s ease-out;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    span {
        font-size: 16px;
        margin: 12px 0;
        display: block;
    }

    ${({ isCollapsed }) => !isCollapsed && css`
        max-height: 545px;

        ${CollapseBox} {
            max-height: 100%;
        }
    `}
`;

export const CollapseBox = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 0;
	overflow: hidden;
	transition: max-height 1s ease-out;

    span, li {
        font-size: 16px;
        margin: 12px 0;
    }

    span {
        display: block;
    }

    ul {
        margin: 0;
        list-style-type: circle;
    }
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