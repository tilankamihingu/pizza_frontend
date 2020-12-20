import React from 'react';
import {Nav,NavIcon,NavLink,Bars} from './NavbarElements';

const Navbar  = ({toggle}) => {
    return (
        <>
          <Nav>
            <NavLink to='/'>PIZZA</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
              <Bars />
            </NavIcon>
          </Nav>  
        </>
    )
}

export default Navbar
