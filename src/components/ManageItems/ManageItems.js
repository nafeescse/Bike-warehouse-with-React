import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import useItems from '../../hooks/useItems';
// import { useTable } from 'react-table'


const ManageItems = () => {

    const [items, setItems] = useItems();
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
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
        <div >
            <p className='text-center' >Manage All Items</p>

            
                <Table responsive bordered hover className='w-5/6 mx-auto  border border-2 border-blue-600'>
                    <thead className='border border-2 border-blue-600'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Supplier</th>
                            <th>Stock</th>
                            <th>Sold</th>
                            <th>Delete</th>
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
                                    <td className='text-center'>{item.sold}</td>
                                    <td className='text-center'> <Button onClick={() => {
                                        handleDelete(item._id)
                                    }} className='border border-red-800 bg-red-600 text-white rounded-md px-2 my-1'>Delete</Button> </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            
        </div>
    );
};

export default ManageItems;