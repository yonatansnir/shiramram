import { cartQuantitys } from './buyQuantity.module.scss';

const Quantity = ({ product_id, quantity, setCart }) => (
    <div className={cartQuantitys}>
        <button onClick={() => changeQuantity(setCart, product_id , quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => changeQuantity(setCart, product_id, quantity + 1)}>+</button>
    </div>
)

function changeQuantity(setCart, id, count){
    setCart({ type: "CHANGE_QUANTITY", payload: { id, count } })
}

export default Quantity;