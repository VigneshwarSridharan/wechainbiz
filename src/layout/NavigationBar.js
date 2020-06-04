import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        })
    }, [])

    return (
        <Navbar color="light" light expand="md" className={`app-navigation ${isSticky ? 'active' : ''}`}>
            <NavbarBrand href="/">
                <img src="./assets/images/logo.png" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className="active">
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Enquiries </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Our Products </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Loan Application </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Lenders </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">How it Works? </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About us </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Our Partners </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#">Sign In <i className="fas fa-sign-in-alt"></i></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar