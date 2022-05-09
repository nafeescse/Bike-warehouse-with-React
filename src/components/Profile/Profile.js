import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useItems from '../../hooks/useItems';

const Profile = () => {
    const [items, setItems] = useItems();
    const [user] = useAuthState(auth);
    console.log(user?.photoURL);
    console.log(user);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div className='w-100'>
            <h2 className="text-center">My Profile</h2>
            <div className='flex flex-col items-center my-5 border border-2 w-50 mx-auto p-2 rounded-lg'>
                <img className='rounded-circle' src={user?.photoURL} alt="" />
                <h2>{user?.displayName}</h2>
                <h2>{user?.email}</h2>
                <div className='flex justify-center '>
                    {user ?

                        <div className=''>

                            <Button className='text-center text-white px-2 border-0 rounded-xl  bg-black text-decoration-none mx-1 my-1' onClick={logout}>Logout</Button>
                        </div>

                        : <div className='px-2 my-2 mx-auto text-decoration-none text-white  flex items-center'><Link className='text-center bg-black px-2 border-0 rounded-xl  text-white text-decoration-none mx-1 my-1' to="/login">Login</Link>
                            <Link className='text-center bg-black px-2  m-1  border-0 rounded-xl  text-white text-decoration-none mx-1 my-1' to="/register" >Register</Link></div>}
                </div>


            </div>



        </div>
    );
};

export default Profile;