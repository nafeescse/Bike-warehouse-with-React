import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';

const Home = () => {
  const [items, setItems] = useState([]);
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
        <h2 className='text-center my-10 text-decoration-underline'>Feature Products: {items.length}</h2>
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
    </div>
  );
};

export default Home; <h2>Welcome Home</h2>