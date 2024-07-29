import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';

const ProductItem = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="product-item">
            <div className="product-item-hover">
                <button onClick={()=> {
                    dispatch(addCart(item))
                }}>Buy</button>
                <Link to={`/product/${item.id}`}>More</Link>
            </div>
            <img className="product-item-img" src={item.image} alt='' />
            <div className="product-item-block">    
                <h4 className="product-item-title">{
                    item.title.length > 20
                    ? item.title.substr(0, 17).trim() + '...'
                    : item.title
                }</h4>
                
                <p className="product-item-text">
                    {item.description.length > 30
                    ? item.description.substr(0, 27).trim() + '...'
                    : item.description}
                </p>
                
                <p className="product-item-price">${item.price}</p>
            </div>
            
            
            
        </div>
    );
};

export default ProductItem;