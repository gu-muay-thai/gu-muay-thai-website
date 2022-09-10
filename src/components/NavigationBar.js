import React, { useState } from 'react'
import { 
    NavBar, NavInner, NavInfo, NavLinks, NavLink, ExpandNavLinks, NavExtended, NavLinkExtended
} from './Styles'

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
            </NavInner>
            {extendNavBar && (
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
