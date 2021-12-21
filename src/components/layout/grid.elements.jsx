import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background-color: #1d2631;
`;

export const Row = styled.div`
    margin: 4rem 12rem;
    padding: 2rem;
    background-color: #fff;
    border-radius: 0.3rem;

    ${props => props.marginTop ? 'margin-top : '+ props.marginTop + ';' : ''}

    @media screen and (max-width: 768px) {
        margin: 3rem 0;
        padding: 1.5rem 1rem;
        border-radius: 0;
        ${props => props.marginTop ? 'margin-top : '+ props.marginTop+ ';' : ''}
    }
`;

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        margin-top: 1rem;
    }
`;