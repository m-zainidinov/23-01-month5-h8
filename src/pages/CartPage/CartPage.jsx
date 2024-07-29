import './cart.scss';
import { useSelector, useDispatch} from 'react-redux';
import { addCart, decrementCart, deleteCart } from '../../redux/reducer';

const CartPage = () => {
    const cart = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();

    return (
        <section>
            <div className="container">
                {
                    cart.map(item => {
                        return  <div key={item.id} className="cart-item">
                            <div className="cart-item-left">
                                <img src={item.image} alt="" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>

                            <div className="cart-item-right">
                                <div className="cart-count">
                                    <button
                                    onClick={()=>{
                                        dispatch(addCart(item))
                                    }}
                                    className="cart-count-btn">+</button>
                                    <span>{item.count}</span>
                                    <button
                                    onClick={()=>{
                                        if(item.count > 1) dispatch(decrementCart(item))
                                    }}
                                    className="cart-count-btn">-</button>
                                </div>
                                <p className="cart-item-price">${(item.price * item.count).toFixed(2)}</p>
                                <button
                                onClick={()=>{
                                    dispatch(deleteCart(item))
                                }}
                                className="cart-delete-btn">Delete</button>
                            </div>
                        </div>
                    })
                }
                <p>Total: <b>${
                    cart.reduce((acc, rec) => {
                        return (acc + rec.count * rec.price)
                    }, 0).toFixed(2)
                    }</b>
                </p>
            </div>
        </section>
    )
}

export default CartPage;