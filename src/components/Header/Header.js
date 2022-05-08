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


        <Navbar className='navbar bg-black' expand="lg">
            <Container className=''>
                <a href='/' className='w-50 text-2xl text-decoration-none text-white fw-bold'>
                    BikeX
                </a>
                <Navbar.Toggle className='bg-white'aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="w-75 mx-auto my-2 my-lg-0 flex items-center"
                        navbarScroll
                    >
                        <Link className='px-2 mx-auto text-decoration-none text-white fs-5' to="/">Home</Link>

                        <Link className='px-2 mx-auto text-decoration-none text-white fs-5' to="/blogs">Blogs</Link>
                        
                        
                        {user ?

                            <div className='flex items-center'>
                                <Link className='px-2 mx-auto text-decoration-none text-white fs-5 ' to="/additems">AddItems</Link>
                                <Link className='px-2 mx-auto text-decoration-none text-white fs-5' to="/myitems">MyItems</Link>
                                <Link className='px-2 mx-auto text-decoration-none text-white fs-5' to="/profile">Profile</Link>
                                <p onClick={logout} className='cursor-pointer text-center text-white px-2 py-1  border-0 rounded-lg bg-primary my-auto' src={user.displayName} alt="" >Logout</p>
                            </div>

                            : <div className='px-2 my-2 mx-auto text-decoration-none text-white fs-5 flex items-center'><Link className='text-center text-black px-2 border-0 rounded-xl  bg-white text-decoration-none mx-1 my-1' to="/login">Login</Link>
                                <Link className='text-center text-black px-2  m-1  border-0 rounded-xl  bg-white text-decoration-none mx-1 my-1' to="/register" >Register</Link></div>}
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Header;