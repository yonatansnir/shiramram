import Link from 'next/link';
import { itemc, picture, titlec } from './products.module.scss';

const ProductItem = ({ product }) => (
    <Link href={`/products/${product.id}`}>
        <div className={itemc}>
            <div className={picture} style={{ backgroundImage: `url(${getImage(product.images)})` }}></div>
            <div className={titlec}>
                <h4>{product.name}</h4>
                <h4>₪{product.price}</h4>
                <button>עוד</button>
            </div>
        </div>
    </Link>
)

function getImage(arr){
    return;
    return arr.length != 0 ? arr[0].src : '';
}

export default ProductItem;