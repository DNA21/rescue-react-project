import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import Logo

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            {/*<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />*/}
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Adopt</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Volunteer</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
