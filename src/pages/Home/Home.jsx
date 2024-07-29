import { useSelector } from 'react-redux';
import ProductsList from '../../components/Products/ProductsList'

const Home = () => {
    const categories = useSelector(s => s.reducer.categories);
    
    return (
        <section>
            {
                categories.map(item => {
                    return <ProductsList key={item} item={item} limit={4} />
                })
            }
        </section>
    );
}

export default Home;