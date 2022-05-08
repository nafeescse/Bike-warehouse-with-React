import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorMsg;
    let load;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        errorMsg =
            <p>{error.message}</p>;

    }
    if (loading) {
        load = <div>
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        navigate('/login')

    }

    return (
        <div className='login grid grid-cols-1 md:grid-cols-2 border-2 border-black'>
            <div className=" bg-black flex flex-col justify-center items-center text-white p-10">
                <h1>Welcome, Back!!</h1>
                <SocialLogin></SocialLogin>
                <p className='text-center px-1 my-2'>To keep connected with us please login with your personal info.</p>

                <button onClick={() => { navigate('/login') }} className='bg-white rounded-pill text-black fw-bold px-4 py-1 my-3 flex items-center'>LOGIN

                </button>

            </div>

            <div className="photo bg-white flex flex-col justify-center items-center">
                <div className='w-50 mx-auto py-2'>


                    <h2 className='text-center text-xl text-red-800'>Register Here</h2>

                    <Form className='flex flex-col '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name : </Form.Label>
                            <Form.Control required type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address : </Form.Label>
                            <Form.Control required onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password : </Form.Label>
                            <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>

                        <div className='flex justify-center'>{load}</div>
                        <small className='text-danger'>{errorMsg}</small>

                        <div className='d-flex justify-content-between align-items-center'>

                            <small>Already Joined? <Link className='text-decoration-none' to='/login'>Login Now</Link></small>
                        </div>
                        <Button className=' text-white px-2 py-1 rounded-pill ' onClick={() => {
                            createUserWithEmailAndPassword(email, password)
                        }}
                            variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>


                </div>

            </div>

        </div>
    );
};

export default Register;