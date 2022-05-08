import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { name, url, price, quantity, sold, description, supplier, _id } = props.item;
    
    const navigate = useNavigate();
    return (
        <div>
            <Row>
                <Card className='shadow-xl' style={{ width: '20rem' }}>
                    <Card.Img variant="top" className='rounded-3 my-2' src={url} />
                    <Card.Body className='flex flex-col justify-center items-center'>
                        <Card.Title className='text-center'>{name}</Card.Title>
                        <p className='text-center'>
                            Price: BDT {price} 
                        </p>
                        <div className='flex'><p className='text-center'>
                            Stock: {quantity} Unit
                        </p>
                        <p className='text-center mx-2'>
                            Sold: {sold} Unit
                        </p></div>
                        <p>{description.slice(0, 200)}</p>
                        <Button onClick={() => { navigate(`update/${_id}`) }} variant="dark">Update</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default Product;



