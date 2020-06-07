import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

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
        <Navbar color="white" light expand="md" className={`app-navigation ${isSticky ? 'active' : ''}`}>
            <NavbarBrand href="/">
                <img src="./assets/images/logo.png" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/enquiries">Enquiries </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/our-products">Our Products </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/loan-application">Loan Application </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/lenders">Lenders </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/how-it-works">How it Works? </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about-us">About us </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/our-partners">Our Partners </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/login">Sign In <i className="fas fa-sign-in-alt"></i></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar