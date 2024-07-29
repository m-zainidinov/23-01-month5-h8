import ProductsList from "../../components/Products/ProductsList";
import { useParams } from 'react-router-dom';

const CatalogPage = () => {
    const params = useParams();

    return (
        <section>
            <ProductsList limit={0} item={params.category} />
        </section>
    );
}

export default CatalogPage;