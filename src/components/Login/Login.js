import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import swal from 'sweetalert';
import { auth } from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorMsg;
    let load;

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, errorReset] = useSendPasswordResetEmail(auth);

    if (error) {

        errorMsg = <div>
            <p>{error.message}</p>
        </div>;
    }
    if (loading) {
        load = <div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });

    }
    if (errorReset) {
        return (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    }
    const handleButton = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login grid grid-cols-1 md:grid-cols-2 border-2 border-rose-900'>
            <div className="photo bg-white flex flex-col justify-center items-center mx-auto">

                <h2 className='text-center text-black'>Login With</h2>
                <SocialLogin></SocialLogin>

                <Form>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='flex justify-center'>{load}</div>
                    <small className='text-dark'>{errorMsg}</small>

                    <div className='d-flex justify-content-between align-items-center'>

                        <small>New to TeachMe? <Link className='text-decoration-none me-2' to='/register'>Join Now</Link></small>

                        <Button onClick={handleButton}
                            variant="dark" type="submit">
                            Submit
                        </Button>
                    </div>

                </Form>


            </div>
            <div className=" bg-black flex flex-col justify-center items-center text-white py-5">
                <strong>To reset your password </strong>
                <div className='flex flex-col mb-5'>
                    <input className='text-black rounded-lg m-2 px-2 py-1'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className='bg-white text-dark border-0' onClick={async () => {
                        await sendPasswordResetEmail(email);
                        swal("Done!", "Reset Email Sent Successfully!", "success");
                    }}>Reset Now</Button>
                </div>
                <h1>Hello, Dear!</h1>
                <p className='text-center'>Enter your personal details and start journey with us.</p>
                <button onClick={() => { navigate('/register') }} className='bg-white rounded-pill text-black fw-bold px-4 py-2 flex items-center'>SIGN UP
                </button></div>
        </div>
    );

};

export default Login;