import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 180.5%;
    color: #FFFFFF;
    align-items: center;
`;

export const Subtitle = styled.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 208.5%;
    color: #FFFFFF;
    align-items: center;
    margin-bottom : 30px;
`;
export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
export const PlayButton = styled(Link)`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    padding: 11px 20px;
`;

