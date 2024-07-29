import './header.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from './icons/cart-icon.svg';
import searchIcon from './icons/search-icon.svg';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    const cartItems = useSelector(s => s.reducer.cart);
    const totalCartItems = cartItems.reduce((total, item) =>
        total + item.count, 0)
    const cartCountDisplay = totalCartItems > 9
        ? '9+'
        : `&nbsp;${totalCartItems}`;

    return (
        <header className='header'>
            <div className='container header-container'>
                <h1 className='header-logo'>
                    <Link to={'/'}>SHOP</Link>
                </h1>

                <div className='header-categories'>
                    <Link to={'/'}>Home</Link>
                    {
                        categories.map(item => {
                            return <Link key={item} to={`category/${item}`}>{item}</Link>
                        })
                    }
                </div>
                
                <div className='header-right'>
                    <Link to={'/'}>
                        <img src={searchIcon} alt=''/>
                    </Link>

                    <Link to={'/cart'}>
                        <div className='cart-icon-container'>
                            <img src={cartIcon} alt='' className='cart-icon' />
                            {totalCartItems > 0 && (
                                <span className='cart-count-item'
                                    dangerouslySetInnerHTML={{ __html:
                                        cartCountDisplay }}></span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;