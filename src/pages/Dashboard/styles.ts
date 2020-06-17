import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Titutlo = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

        &:placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repository = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
            transition: transform 0.2;
            /* offset-x | offset-y | blur-radius | color */
            box-shadow: -10px 5px 15px rgba(0, 0, 0, 0.2);
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div {
        margin-left: 16px;
        flex: 1;

        strong {
            font-size: 20px;
            color: #3d3d4d;
        }

        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }

    svg {
        margin-left: auto;
    }
`;