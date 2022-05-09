import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import Iframe from 'react-iframe';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Home = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://fast-hamlet-93164.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setItems(data))

  }, [])

  return (
    <div classname="overflow-x-hidden">
      <Banner></Banner>
      <div className=' w-75 mx-auto'>
        <h2 className='text-center my-10 '>Feature Products: {items.length}</h2>
        {items.length !== 0 ? <div></div> : <div className='flex justify-center'>
          <Spinner id='spinner' animation="grow" />
          <Spinner id='spinner' animation="grow" />
          <Spinner id='spinner' animation="grow" />
          <Spinner id='spinner' animation="grow" />
          <Spinner id='spinner' animation="grow" />
        </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
          {
            items.map(item => <Product key={item._id} item={item}></Product>)
          }
        </div>
      </div>

      <div className='flex justify-center my-5'>
        <Button className='px-5' onClick={() => { navigate('/manageitems') }}>Manage Items </Button>
      </div>

      <div className='flex flex-col items-center justify-center pb-10 mx-2'>
        <p className='text-center  fw-bold fs-3  '>Youtube Videos</p>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <iframe className='p-3'  width="390" height="315" src="https://www.youtube.com/embed/XiAqmlIEFi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe className='p-3' width="390" height="315" src="https://www.youtube.com/embed/zyBh1-1bSBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      {user? <Profile></Profile> : <div></div>}

    </div>
  );
};

export default Home; <h2>Welcome Home</h2>