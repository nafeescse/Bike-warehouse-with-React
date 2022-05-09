import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://fast-hamlet-93164.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);
    return [items, setItems]
}

export default useItems;