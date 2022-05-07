import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import '../Header/Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (


        <Navbar className='navbar bg-blue-200' expand="lg">
            <Container className='flex justify-center'>
                {/* <a href='/' className='text-2xl text-decoration-none text-blue-800 fw-bold'>
                    TEACHME
                </a> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0 flex"
                        navbarScroll
                    >
                        <Link className='px-2 mx-auto text-decoration-none text-blue-700 fs-5' to="/">Home</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-blue-700 fs-5' to="/products">Products</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-blue-700 fs-5' to="/blogs">Blogs</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-blue-700 fs-5' to="/about">About</Link>
                        {user ?
                            <p onClick={logout} className='cursor-pointer text-center text-red-600 px-2  border-0 rounded-pill  bg-danger' src={user.displayName} alt="" >Sign Out</p>
                            : <div className=''><Link className='text-center text-white px-2 py-1 m-1  border-0 rounded-pill  bg-blue-600 text-decoration-none mx-1 my-1' to="/login">Login</Link>
                                <Link className='text-center text-white px-2 py-1 m-1  border-0 rounded-pill  bg-blue-600 text-decoration-none mx-1 my-1' to="/register" >Register</Link></div>}
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Header;