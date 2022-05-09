import React from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useItems from '../../hooks/useItems';
// import { useTable } from 'react-table'


const ManageItems = () => {

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `https://fast-hamlet-93164.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = items.filter(item => item._id !== id);
            setItems(rest);

        }
    }

    return (
        <div className='w-full lg:w-3/4 mx-auto'>
            <p className='text-center fs-3 text-decoration-underline my-3' >Manage All Items</p>

            {items.length !== 0 ? <div></div> : <div className='flex justify-center my-20'>
                <Spinner id='spinner' animation="grow" />
                <Spinner id='spinner' animation="grow" />
                <Spinner id='spinner' animation="grow" />
                <Spinner id='spinner' animation="grow" />
                <Spinner id='spinner' animation="grow" />
            </div>
            }
            <Table responsive bordered hover className='border border-lg'>
                <thead className=''>
                    <tr>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Supplier</th>
                        <th className='text-center'>Stock</th>
                        {/* <th className='text-center'>Sold</th> */}
                        <th className='text-center'>Delete</th>
                        {/* <th>Username</th> */}
                    </tr>
                </thead>
                <tbody >
                    {
                        items.map(item =>
                            <tr className='border border-blue-600'>
                                <td className='text-center'>{item.name}</td>
                                <td className='text-center'>{item.price}</td>
                                <td className='text-center'>{item.supplier}</td>
                                <td className='text-center'>{item.quantity}</td>
                                {/* <td className='text-center'>{item.sold}</td> */}
                                <td className='text-center'> <Button onClick={() => {
                                    handleDelete(item._id)
                                }} className='border bg-danger rounded-lg px-2 my-1'>Delete</Button> </td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageItems;