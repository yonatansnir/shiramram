import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import Loader from '../loader/Loader';
import ProductItem from './ProductItem';
import { section, lastProduct } from './products.module.scss';


const LastProducts = () => {
    const { products } = useContext(ProductsContext);

    return(
        <div className={section}>
            <h2>מוצרים אחרונים</h2>
            <h3>מוצרים אחרונים במיוחד בשבילך</h3>
            <div className={lastProduct}>
                {!products ? <Loader /> : 
                products.slice(0, 4).map(item => <ProductItem key={item.id} product={item} /> )}
            </div>
        </div>
    )
}

export default LastProducts;