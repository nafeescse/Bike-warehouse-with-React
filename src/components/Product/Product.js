import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {  model, name, url } = props.item;
    const navigate = useNavigate();
    return (
        <div>
        <Row>
        <Card className='shadow-xl' style={{ width: '20rem' }}>
            <Card.Img variant="top" className='rounded-3 my-2' src= {url} />
            <Card.Body className='flex flex-col justify-center items-center'>
                <Card.Title className='text-center'>{name}</Card.Title>
                {/* <p className='text-center'>
                {class}
                </p> */}
                <p className='text-center'>
                   Model: {model}
                </p>
                <Button onClick={()=> {navigate('/checkout')}}  variant="danger">Update</Button>
            </Card.Body>
        </Card>
    </Row>
    </div>
    );
};

export default Product;



