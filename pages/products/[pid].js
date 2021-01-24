import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PageHead from '../../components/pageHead/PageHead';
import BottomMenu from '../../components/bottomMenu/BottomMenu';
import BuyQuantity from '../../components/products/buySection/BuyQuantity';
import ShareIcon from '../../components/icons/ShareIcon';
import Loader from '../../components/loader/Loader';
import LastProducts from '../../components/products/LastProducts';
import { ProductsContext } from '../../context/ProductsProvider';

import { productContainer, productPic, productDetails } from './productItem.module.scss';

const ProductItem = () => {
    const { products } = useContext(ProductsContext);
    const [product, setProduct] = useState(null);
    const route = useRouter();
    const [images, setImages] = useState([]);
    let [choosenImage, setChoosenImage] = useState('');

    let { pid } = route.query;

    useEffect(() => {
        if (!pid) return;
        if (!products) return;
        let theProduct = products.find(product => product.id == pid);
        setProduct(theProduct);
        setImages(theProduct.images);
        if (theProduct.images[0]) setChoosenImage(theProduct.images[0].src);
        else setChoosenImage('');
    }, [pid, products])

    return (
        !product ? <Loader /> :
            <>
                <PageHead title={product.name} description={product.description} />
                <div className={productContainer}>
                    <div className={productPic}>
                        {choosenImage ? <img src={choosenImage} alt="sddsd" /> : ''}
                        <div>
                            {images.map(item => <img key={item.id} onClick={() => setChoosenImage(item.src)} src={item.src} />)}
                        </div>
                    </div>
                    <div className={productDetails}>
                        <ShareIcon />
                        <h4>{product.categories ? product.categories.map(c => c.name + ', ') : ''}</h4>
                        <h2>{product.name}</h2>
                        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                        <h3>₪{product.price}</h3>
                        <BuyQuantity item={product} />
                    </div>
                </div>
                <LastProducts />
                <BottomMenu />
            </>
    )
}

export default ProductItem