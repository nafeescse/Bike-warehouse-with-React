import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const SocialLogin = () => {
        const navigate = useNavigate();
        let errorMsg;
        let load;

        const location = useLocation();
        let from = location.state?.from?.pathname || "/";

        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
        if (error) {
            errorMsg = <p>{error.message}</p>
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
            navigate(from, { replace: true });
        }
        


        return (
            <div className='flex flex-col justify-center items-center'>
                <Button onClick={() => { signInWithGoogle() }} className='rounded-pill border-0 my-1 px-5'>
                    <svg className='w-5 h-5 inline mx-2 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                    Google</Button>
                <div className='flex justify-center'>{load}</div>
                <small className='text-white'>{errorMsg}</small>
            
                <div>
                    <hr />
                    <p className='px-5'>OR</p>
                    <hr />
                </div>

            </div>
        );
    };


export default SocialLogin;