import React, { useState } from 'react'
import { 
    NavBar, NavInner, NavInfo, NavLinks, NavLink, ExpandNavLinks, NavDecoration, NavLogo, NavExtended, NavLinkExtended
} from './Styles'
import logo from '../data/logo.png'

const NavigationBar = () => {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <NavBar extendNavBar={extendNavBar}>
            <NavInner>
                <NavInfo>
                    <NavLinks>
                        <NavLink to="/gu-muay-thai-website">Home</NavLink>
                        <NavLink to="/gu-muay-thai-website/about">About</NavLink>
                        <NavLink to="/gu-muay-thai-website/training">Training</NavLink>
                        <NavLink to="/gu-muay-thai-website/socials">Socials</NavLink>
                        <NavLink to="/gu-muay-thai-website/faq">FAQ</NavLink>
                        <ExpandNavLinks onClick={() => {setExtendNavBar((currentValue) => !currentValue)}}>
                            {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
                        </ExpandNavLinks>
                    </NavLinks>
                </NavInfo>
                <NavDecoration>
                    <NavLogo src={logo} alt="GUMT's Thaiger Club Logo" />
                </NavDecoration>
            </NavInner>
            {(extendNavBar || window.screen.width <= 700) && (
                <NavExtended>
                    <NavLinkExtended to="/gu-muay-thai-website">Home</NavLinkExtended>
                    <NavLinkExtended to="/gu-muay-thai-website/about">About</NavLinkExtended>
                    <NavLinkExtended to="/gu-muay-thai-website/training">Training</NavLinkExtended>
                    <NavLinkExtended to="/gu-muay-thai-website/socials">Socials</NavLinkExtended>
                    <NavLinkExtended to="/gu-muay-thai-website/faq">FAQ</NavLinkExtended>
                </NavExtended>
            )}
        </NavBar>
    )
}

export default NavigationBar;
