import { tableCart, cartItem, sumPrice, removeFromCarts } from './tableCart.module.scss';

import Quantity from '../products/buySection/Quantity';

const TableCart = ({ list, setCart }) => (
    <div className={tableCart}>
        <h2>סל הקניות שלך</h2>
        {list.map(({ product_id, name, quantity, price, image }) => (
            <div className={cartItem} key={product_id}>
                <div><img src={image} /></div>
                <div data-name="שם">
                    <h3>{name}</h3>
                    <p>₪{price}</p>
                    <Quantity product_id={product_id} quantity={quantity} setCart={setCart} />
                </div>
                <div className={sumPrice}>
                    <h3>₪{quantity * price}</h3>
                </div>
                <button className={removeFromCarts} onClick={() => setCart({ type: "REMOVE_FROM_CART", payload: product_id })}>X</button>
            </div>
        ))}
    </div>
)

export default TableCart;