import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './products.scss';
import { Skeleton } from '../Skeleton';

const ProductsList = ({item, limit}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios (
            limit
            ? `https://fakestoreapi.com/products/category/${item}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${item}`
        )
        .then(({data}) => {
            setData(data);
            setLoading(false);
    })
    }, [limit, item]);

    if (loading) {
        return <Skeleton />
    }

    return (
        <div className="container">
            <h1>{item}</h1>
            <div className='row'>
                {
                    data.map(item => {
                        return <div className='col-3' key={item.id}>
                            <ProductItem item={item} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProductsList;