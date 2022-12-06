import style from 'styled-components';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export const Section = style.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    justify-content: center;
`;

export const Title = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 187.5%;
    color: #FFFFFF;
    margin : 20px 0px 10px 0px;
`;

export const Title2 = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #FFFFFF;
    margin :0px 0px 20px 0px;
`;

export const Subtitle = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 208.5%;
    color: #FFFFFF;
    align-items: center;
    margin : 0px 0px 40px 0px;
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
    width: 1092px;
    height: 169px;
    background-color: #575B81;
    padding: 30px;
    border-radius: 15px;
`;

export const Button = styled(Link)`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border-radius: 10px;
    padding: 10px 15px;
`;

