import styled from "styled-components";

const fontSizeParagraph = '1.3rem';
const fontSizeParagraphMobile = '1rem';

export const Title = styled.h1`
    padding-bottom: 0.5rem;
    width: 100%;
    border-bottom: 2px solid #0a58ca;
    text-align: center;
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    margin-top: ${props => props.marginTop ? props.marginTop : '2rem'};
    font-size: ${fontSizeParagraph};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    text-align: ${props => props.textAlign ? props.textAlign : "justify"};
    font-style: ${props => props.fontStyle ? props.fontStyle : 'normal'};

    @media screen and (max-width: 768px) {
        font-size: ${fontSizeParagraphMobile};
    }
`;

export const Blockquote = styled.blockquote`
    font-weight: 300;
    text-align: center;
    font-size: ${fontSizeParagraph};
    font-style: italic;
    margin: auto 8rem;
    margin-top: 2rem;
    font-weight: 700;
    font-family: 'Cinzel Decorative', cursive;
    letter-spacing: 2px;

    @media screen and (max-width: 768px) {
        font-size: ${fontSizeParagraphMobile};
        margin-right: 0;
        margin-left: 0;
    }
`;

export const Figcaption = styled.figcaption`
    text-align: right;
    margin: 0 4rem;

    @media screen and (max-width: 768px) {
        margin: 0;
        margin-top: 1rem;
    }
`;

export const BoldText = styled.b`
    font-weight: ${props => props.fontWeight ? props.fontWeight : '500'};
    font-style: ${props => props.fontStyle ? props.fontStyle : 'normal'};
    text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
`;