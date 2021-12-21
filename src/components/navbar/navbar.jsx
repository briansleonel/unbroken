import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  NavMenu,
  MobileIcon,
  NavBtnLinkA
} from './navbarElements';

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const changeHandle = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <>
            <Nav>
                <NavLink to='/' main='true'>
                    Campamento MDV
                </NavLink>

                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />}
                </MobileIcon>

                <NavMenu open={showMobileMenu}>
                    <NavLink to='/home' onClick={() => changeHandle()}>
                        Home
                    </NavLink>
                    <NavLink to='/payment-methods' onClick={() => changeHandle()}>
                        Formas de pago
                    </NavLink>
                    <NavLink to='/contact-us' onClick={() => changeHandle()}>
                        Contacto
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/register'>Pre-Inscribirse</NavBtnLink> */}

                    <NavBtnLinkA target={'_blank'} href='https://docs.google.com/forms/d/e/1FAIpQLSfcil7SBgfwyAsHGIzFHhMgRaFGbon0CiFdJNZkp8FDZo0BBQ/viewform?usp=sf_link' >Inscripción</NavBtnLinkA>
                </NavMenu>
                {
                    /* <NavBtn>
                        <NavBtnLink to='/signin'>Pre Inscribirse</NavBtnLink>
                    </NavBtn> */
                }
                
            </Nav>
        </>
    );
};

/*
    
                <Bars onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />}
                </Bars>
*/

export default Navbar;