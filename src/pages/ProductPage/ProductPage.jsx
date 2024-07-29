import './productPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addCart } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) => setProduct(data))
    }, [params]);

    return (
        <section className='productPage'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={product.image} className='productPage-img' alt="" />
                    </div>

                    <div className="col-6">
                        <h2 className='productPage-title'>{product.title}</h2>
                        <p className='productPage-text'><b>Description: </b>{product.description}</p>
                        <p className='productPage-text'><b>Category: </b>{product.category}</p>
                        <p className='productPage-text'><b>Price: </b>${product.price}</p>
                        
                        <button className='productPage-btn'
                            onClick={() => {
                                dispatch(addCart(product))
                            }}
                        >Buy</button>
                        <button className='productPage-btn' onClick={() =>
                            navigate(-1)
                        }>Go back</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage;