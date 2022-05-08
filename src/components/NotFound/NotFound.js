
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import photo from '../../../src/404.png'

const NotFound = () => {
    const navigate =  useNavigate();
    return (
        <div className='flex flex-col items-center bg-black'>
            <img src={photo} alt="" />
            <div className='my-3'><Button onClick={() => {navigate('/')}} className='bg-black border border-black text-white'>Back to Home</Button></div>
            
        </div>
    );
};

export default NotFound; 