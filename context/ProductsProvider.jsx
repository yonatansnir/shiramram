import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(resp => resp.json())
            .then(data => setProducts(data));
        fetch('/api/products/categories')
            .then(resp => resp.json())
            .then(data => setCategories(data))
    }, [])
    return(
        <ProductsContext.Provider value={{ products, categories }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;