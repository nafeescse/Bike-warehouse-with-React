import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="text-center text-white bg-black" >
          
            <div className="container p-4 pb-0">
                    <p className="d-flex justify-content-center align-items-center">
                        <span className="me-3">Register for free</span>
                        <button onClick={()=> {navigate('/register')}}type="button" className="btn btn-outline-light btn-rounded">
                            Sign up!
                        </button>
                    </p>
                
            </div>

            <div className="text-center p-3 bg-black">
                
                <a className="text-white text-decoration-none" href="https://nafees.unaux.com/">nafees.unaux.com</a> © 2022
            </div>
        </footer>
    );
};

export default Footer;