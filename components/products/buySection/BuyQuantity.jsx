import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartProvider';
import { buySection, quantitys, addToCartc } from './buyQuantity.module.scss';

const BuyQuantity = ({ item }) => {
    let [count, setCount] = useState(1);
    const { setCart } = useContext(CartContext);
    
    const addToCart = () => {
        let image = item.images[0].src ? item.images[0].src : '';
        let product = { product_id: item.id, name: item.name, price: item.price, quantity: count, image };
        setCart({ type: "ADD_TO_CART", payload: product });
    }

    return(
        <div className={buySection}>
            <div className={quantitys}>
                <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className={addToCartc} onClick={addToCart}>הוספה לעגלה</button>
        </div>
    )
}

export default BuyQuantity;