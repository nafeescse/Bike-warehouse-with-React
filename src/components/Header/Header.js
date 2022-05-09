import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import '../Header/Header.css';
import logo from '../../../src/logox.jpg'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (


        <Navbar className='navbar bg-black' expand="lg">
            <Container className=''>
                
                <a href='/' className='flex items-center w-50 text-2xl text-decoration-none text-white fw-bold'>
                <img className='w-7 h-5 rounded-pill mx-1' src={logo} alt="" />
                BikeXpress
                </a>
                <Navbar.Toggle className='bg-white'aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="w-75 mx-auto my-2 my-lg-0 flex items-center"
                        navbarScroll
                    >
                        <Link className='px-2 mx-auto text-decoration-none text-white' to="/">Home</Link>

                        <Link className='px-2 mx-auto text-decoration-none text-white ' to="/blogs">Blogs</Link>
                        
                        
                        {user ?

                            <div className=''>
                                <Link className='px-2 mx-auto text-decoration-none text-white  ' to="/additems">Add</Link>
                                <Link className='px-2 mx-auto text-decoration-none text-white ' to="/manageitems">Manage</Link>
                                <Link className='px-2 mx-auto text-decoration-none text-white ' to="/profile">Profile</Link>
                                <Button className='text-center text-black px-2 border-0 rounded-xl  bg-white text-decoration-none mx-1 my-1' onClick={logout}>Logout</Button>
                            </div>

                            : <div className='px-2 my-2 mx-auto text-decoration-none text-white  flex items-center'><Link className='text-center text-black px-2 border-0 rounded-xl  bg-white text-decoration-none mx-1 my-1' to="/login">Login</Link>
                                <Link className='text-center text-black px-2  m-1  border-0 rounded-xl  bg-white text-decoration-none mx-1 my-1' to="/register" >Register</Link></div>}
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Header;