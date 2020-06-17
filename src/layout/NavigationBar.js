import React, { useState, useEffect } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'
import BorrowerLogin from '../views/Models/BorrowerLogin';
import BorrowerSignup from '../views/Models/BorrowerSignup';
import { connect } from 'react-redux';

const NavigationBar = ({ userDetails }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false)

    const [isBorrowerLoginOpen, setIsBorrowerLoginOpen] = useState(false)

    const [isBorrowerSignup, setIsBorrowerSignup] = useState(false)

    const toggleSingIn = () => setIsBorrowerLoginOpen(!isBorrowerLoginOpen);

    const toggleSingUp = () => setIsBorrowerSignup(!isBorrowerSignup)

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
        <React.Fragment>
            <Navbar color="white" light expand="lg" className={`app-navigation ${isSticky ? 'active' : ''}`}>
                <Link className="navbar-brand" to="/">
                    <img src="./assets/images/logo.png" alt="" />
                </Link>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/enquiries">Enquiries </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/our-products">Our Products </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/new-loan">Loan Application </NavLink>
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

                {
                    !userDetails ? (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div className="nav-link pointer" onClick={toggleSingIn}>Sign In <i className="fas fa-sign-in-alt"></i></div>
                            </NavItem>
                        </Nav>
                    ) : (
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <div className="nav-link" >Welcome {userDetails.first_name} <i className="fas fa-sign-in-alt"></i></div>
                                </NavItem>
                            </Nav>
                        )
                }
                <NavbarToggler onClick={toggle} />
            </Navbar>
            {
                !userDetails && (
                    <React.Fragment>
                        <BorrowerLogin isOpen={isBorrowerLoginOpen} toggle={toggleSingIn} toggleSingUp={toggleSingUp} />
                        <BorrowerSignup isOpen={isBorrowerSignup} toggle={toggleSingUp} toggleSingIn={toggleSingIn} />
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = ({ Application }) => ({
    userDetails: Application.userDetails
})

export default connect(mapStateToProps)(NavigationBar)