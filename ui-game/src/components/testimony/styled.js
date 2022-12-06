import style from 'styled-components';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


export const Section = style.section`
    height: 70vh;
    display: flex;
    flex-direction: column;
    background-color: #575B81;
    background-size: cover;
    justify-content: center;
    align-items: center;
`;

export const Title = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 180.5%;
    color: #FFFFFF;
    text-align: center;
    margin :10px;
`;

export const Subtitle = style.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    color: #FFFFFF;
    text-align: center;
    margin : 10px 10px 40px 10px;
`;

export const Subtitle2 = style.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    color: #FFFFFF;
    margin:0;
`;

export const CustomCard = styled(Card)`
    height: 212px;
    width: 350px;
    background-color: #1E212E;
    padding: 10px;
    border: 2px solid orange; 
    border-radius: 10px;
`;

export const CustomCard2 = styled(Card)`
    height: 212px;
    width: 350px;
    background-color: #575B81;
    padding: 10px;
    border: 2px solid white; 
    border-radius: 10px;
`;

export const Subheader = styled(Typography)`
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.43;
    color: #546e7a;
`
export const Subheader2 = styled(Typography)`
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.43;
    color: #1E212EC5;
`


