import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <Navbar className='navbar-dark1' expand='md' container='md' sticky='top'>
                <NavbarBrand href='/'>LOGO</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto text-white' navbar>
                        <NavItem>
                            <NavLink className='nav-link text-white' to='about'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='contact'>Contact Us</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Adopt
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className='nav-link text-black' to='adopt'>Dogs</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className='nav-link text-black' to='adopt'>Cats</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
