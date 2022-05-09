import React, { useEffect, useState } from 'react';
import './Item.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handelDelivered = event => {
        event.preventDefault();
        let deliverd = item?.quantity - 1;
        console.log(deliverd);
        item.quantity = deliverd;
        console.log(item);
        setItem(item);
        fetch(`http://localhost:5000/products/${id}`, {
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
        // window.location.reload();
    }
    return (
        <div className='my-5 text-xl'>
            <h2 className='text-center'>Item Details of : {item.name}</h2>
            <div className='flex justify-center my-5'>
                <Button className='px-5' onClick={() => { navigate('/manageitems') }}>Manage Items </Button>
            </div>
            <Card className='p-3 border-none shadow-lg w-1/2 mx-auto rounded-lg grid grid-cols-1'>
                <img className='rounded-lg' src={item.url} alt="" />
                <div className='p-2'>
                    <p><span >Name:</span>  {item.name}</p>
                    <p><span>Price:</span> {item.price}</p>
                    <p><span>Stock:</span> {item.quantity} unit</p>
                    <p><span>Sold:</span> {item.sold} unit</p>
                    <p><span>Supplier:</span> {item.supplier}</p>
                    <p>{item.description}</p>

                    <div className='my-4 flex flex-col w-full sm:w-1/2 mx-auto'>
                        <input className='' type="number" name="quantity" placeholder='Add Stock' />
                        <Button className='bg-blue-600 text-white px-2 py-1 rounded-lg my-2' onClick={handelDelivered}>Restock</Button>

                        <Button className='bg-blue-600 text-white px-2 py-1 rounded-lg' onClick={handelDelivered}>Delivered</Button>
                    </div>

                </div>

            </Card>
        </div>
    );
};

export default Item;