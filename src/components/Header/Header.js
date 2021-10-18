import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="">
            <Navbar bg="light" sticky="top" collapseOnSelect expand="lg" >
                <Container className="d-flex">
                    <div className="justify-content-start ms-3">
                        <img src={logo} alt="" />
                    </div>
                    <Nav className="justify-content-around d-flex gap-3 ">
                        <Link to="/home">Home</Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Online Consult</Nav.Link>
                        <Nav.Link href="#features">Doctors</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <Link to="/register">Register</Link>
                    </Nav>
                    {
                    user.email ?
                    <span><button onClick={logOut} className="btn btn-info">Logout</button><span 
                    style={{ marginLeft:'10px'}}>{user.displayName}</span>
                    </ span>
                    :
                    <Link to="/login"><button className="btn btn-danger">Login</button></Link>
                }

                    
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;