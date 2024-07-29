import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getCategories } from './redux/reducer';
import { useEffect } from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CartPage from './pages/CartPage/CartPage';
import './style.scss';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:category' element={<CatalogPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
