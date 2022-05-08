import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div class="overflow-x-hidden">
      <Banner></Banner>
      <div className=' w-75 mx-auto'>

       
        <h2 className='text-center'>Available Products: {items.length}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
          {
            items.map(item => <Product key={item._id} item={item}></Product>)
          }
        </div>
      </div>

      <div className='flex justify-center my-5'><Button className='px-5' onClick={() => { navigate('/manageitems') }}>Manage Items</Button></div>



    </div>
  );
};

export default Home; <h2>Welcome Home</h2>