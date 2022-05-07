import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  // const handleAddItem = event => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const user = {name, email};


  // }
  return (
    <div>
      <h2>Welcome Home</h2>
      <h2>Items: {items.length}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
          items.map(item => <Product key={item._id} item={item}></Product>)
        }
      </div>

      {/* <form onSubmit={handleAddItem}>
         <input type="text" name="name" placeholder='Name'/>
         <input type="text" name="name" placeholder='Email'/>
         <input type="submit" value="add Items"/>
      </form> */}
    </div>
  );
};

export default Home; <h2>Welcome Home</h2>