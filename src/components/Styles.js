import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavBar ? "65vh" : "80px")};
    background-color: #FFC803;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const NavInfo = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavInner = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavLinks = styled.div`
    display: flex;
`;

export const NavLink = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: Tahoma, sans-serif;
    text-decoration: none;
    margin: 20px;

    @media (max-width: 700px) {
        display: none;
    }

    &:hover {
        font-weight: bold;
    }
`;

export const NavLinkExtended = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: Tahoma, sans-serif;
    text-decoration: none;
    margin: 10px;
    display: block;

    &:hover {
        font-weight: bold;
    }
`;

export const ExpandNavLinks = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavExtended = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const Heading = styled.h1`
    font-family: Tahoma, sans-serif;
    text-align: center;
`

export const Notice = styled.h2`
    font-family: Tahoma, sans-serif;
    text-align: center;
    color: red;
`

export const Global = createGlobalStyle`
    body {
        background-color: black;
        color: #FFC803;
    }
`
