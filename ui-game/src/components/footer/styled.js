import style from 'styled-components'
import { Link } from 'react-router-dom'


export const Section = style.section`
    display: flex;
    flex-direction: column;
    background: black;
    height: 45vh;
    justify-content: center;
`

export const Title = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 153.5%;
    color: #FFFFFF;
`
export const Subtitle = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`

export const FooterLink = style(Link)`
    display : flex;
    flex-direction: row;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 186.3%;
    color: #FFFFFF;

    &:hover {
        color: orange;
        transition: 200ms ease-in;
    }
    &:active {
        color: orange;
        transition: 200ms ease-in;
    }
`

export const Heading = style.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
color: #FFFFFF;
`
export const Copyright = style.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 190.6%;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
`
export const Round = style(Link)`
    margin : 10px;
`
