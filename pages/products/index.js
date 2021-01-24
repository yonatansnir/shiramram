import { useContext, useState } from 'react';
import ProductItem from '../../components/products/ProductItem';
import Loader from '../../components/loader/Loader';
import { ProductsContext } from '../../context/ProductsProvider';
import { productsPage, productsList, serachBox } from './productsPage.module.scss';
import PageHead from '../../components/pageHead/PageHead';

const Products = () => {
    const { products, categories } = useContext(ProductsContext);
    let [chooseCategorie, setChooseCategorie] = useState('')
    let [search, setSearch] = useState('');
    const filterProducts = !products ? null : products.filter(product => product.name.includes(search) && product.categories.filter(c => c.name.includes(chooseCategorie)).length !== 0);

    return (
        <>
            <PageHead title='המוצרים שלי' description={'כל המוצרים שלי'} />
            <div className={productsPage}>
                <h2>מוצרים</h2>
                <div className={serachBox}>
                    <ul>
                        <li onClick={() => setChooseCategorie('')} key={'jdf2452cs'} style={chooseCategorie ? {} : { background: 'rgb(185, 0, 176)' }}>הכל</li>
                        {categories.map(({ id, name, count }) => (<li key={id} style={chooseCategorie === name ? { background: 'rgb(185, 0, 176)' } : {}} onClick={() => setChooseCategorie(name)}><span>{count}</span>{name}</li>))}
                    </ul>
                    <input type="text" placeholder="חפשי" onChange={e => setSearch(e.target.value)} />

                </div>
                {!filterProducts ? <Loader /> :
                    filterProducts.length === 0 ? <h2 style={{ fontSize: "30px", color: "rgb(100, 100, 100)", marginTop: "30px" }}>לא נמצאו מוצרים 🤷‍♀️</h2> :
                        <div className={productsList}>
                            {filterProducts.map(item => <ProductItem key={item.id} product={item} />)}
                        </div>
                }
            </div>
        </>
    )
}

export default Products;