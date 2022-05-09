import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Products = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleAddItem = event => {

        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const url = event.target.url.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;
        const username = user.displayName;
        const item = { name, price, url, quantity, sold, supplier, description, username };
        console.log(item);
        fetch('http://fast-hamlet-93164.herokuapp.com/products', {
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
                navigate('/home');

            })
    }
    return (
        <div className='flex flex-col items-center'>
            <h2>Add New Items</h2>


            <form className='' onSubmit={handleAddItem}>
                <label >Name: </label>
                <input name='name' className='border rounded-lg px-2 my-2' type="text" placeholder='Enter Name' required />
                <br />
                <label >Price: </label>
                <input name='price' className='border rounded-lg my-2 px-2' type="number" placeholder='Enter Price' required />
                <br />
                <label >Image: </label>
                <input name='url' className='border rounded-lg px-2 my-2' type="text" placeholder='Enter photo URL' required />
                <br />
                <label >Stock : </label>
                <input name='quantity' className='border rounded-lg my-2 px-2' type="number" placeholder='Available Quantity' required />
                <br />
                <label >Sold: </label>
                <input name='sold' className='border rounded-lg px-2 my-2' type="number" placeholder='Sold Quantity' required />
                <br />
                <label >Supplier: </label>
                <input name='supplier' className='border rounded-lg px-2 my-2' type="text" placeholder='Supplier Name' />
                <br />
                <div className='flex items-center my-2'>
                    <label >Details: </label>
                    <textarea cols={23} name='description' className='border rounded-lg px-2' type="number" placeholder='Item Description' required />
                </div>

                <div className='w-20 my-2 mx-auto'>
                    <input className='bg-black text-white px-2 py-1 rounded-xl' type="submit" value="Add product" />
                </div>
            </form>
        </div>
    );
};

export default Products;


// The Hero Glamour comes with powerful 125 cc (appx.) engine and a 5-speed gearbox. Powered with the advanced technology - i3s, Xsens with FI, Autosail.Packed with a powerful engine that delivers maximum torque of 10.6 Nm @ 6000 rpm and maximum power up to 8 kW @ 7500 rpm, the Hero Glamour bike makes for a powerful ride. The 100/80 wire rear tyre adds to the performance of the bike.The bike comes with front disc brake for added control which makes the bike easy to control in heavy city traffic and unfavourable roads.