import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavBar ? "65vh" : "80px")};
    background-color: black;
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

export const NavDecoration = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
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
    color: white;
    font-size: x-large;
    font-family: Tahoma;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const NavLogo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;

export const ExpandNavLinks = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
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
    font-family: Tahoma;
    text-align: center;
`
