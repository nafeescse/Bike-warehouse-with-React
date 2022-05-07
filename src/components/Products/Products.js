import React from 'react';
import { Button } from 'react-bootstrap';

const Products = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const model = event.target.model.value;
        const url = event.target.url.value;
        const item = { name, model, url };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('items added successfully!!!');
                event.target.reset();

            })
    }
    return (
        <div className='flex flex-col items-center'>
            <h2>Add New Items</h2>


            <form className='' onSubmit={handleAddItem}>
                <label >Name: </label>
                <input name='name' className='border rounded-lg px-2 my-2' type="text" placeholder='Name' required />
                <br />
                <label >Model: </label>
                <input name='model' className='border rounded-lg my-2 px-2' type="text" placeholder='Model' required />
                <br />
                <label >Image: </label>
                <input name='url' className='border rounded-lg px-2' type="text" placeholder='URL' required />
                <br />
                <div className='w-20 my-2 mx-auto'>
                    <input className='bg-blue-600 text-white px-2 py-1 rounded-xl' type="submit" value="Add Items" />
                </div>
            </form>
        </div>
    );
};

export default Products;