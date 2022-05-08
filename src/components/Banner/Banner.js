import React, { useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';
import banner from '../../../src/banners.jpg';

const Banner = () => {
    const [items, setItems] = useItems();
    return (
        <div className="">
            <img src={banner} alt=''></img>
        </div>

    );
};

export default Banner;