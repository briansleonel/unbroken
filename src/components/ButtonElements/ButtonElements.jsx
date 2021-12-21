import styled from "styled-components";

export const ButtonResize = styled.button`
    pointer-events: auto;
	cursor: pointer;
	background: #e7e7e7;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	position: relative;
	display: inline-block;

	font-family: obvia, sans-serif;
	font-weight: 500;
	font-style: italic;

    &.after, &.before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &.before {
        content: '';
        background: #000;
        transition: transform 0.3s cubic-bezier(0.2,1,0.7,1);
    }

    &.hover::before {
        transform: scale3d(0.9, 0.8, 1);
    }

    &.after {
        content: '';
        border: 1px solid #000;
        transition: transform 0.3s cubic-bezier(0.2,1,0.7,1);
        border-radius: 0px;
        transform: scale3d(0.85, 0.65, 1);
    }

    &.hover::after {
        transform: scale3d(1,1,1);
    }
`;

export const ButtonLink = styled.a`
    border-radius: 4px;
    background: #3EB0FA;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0088F7;
        color: #fff;
        transform: scale(1.2);
    }
    @media screen and (max-width: 768px) {
        margin: 0;
        width: 50%;
        text-align: center;
        margin-top: 1rem;
    }
`;