import { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../../context/CartProvider';
import { cartContainer, darkend, productItem, continueToBy, btnRemove } from './cart.module.scss';
import Quantity from '../products/buySection/Quantity';

const SideCart = ({ isCartOpen, setCartOpen }) => {
    const route = useRouter();
    let { cart, setCart } = useContext(CartContext);

    return(
        <>
        <div className={isCartOpen ? darkend : ''} onClick={setCartOpen}></div>
        <div className={cartContainer} style={isCartOpen ? { left: "0px" } : {}}>
            {cart.list.length === 0 ? <h3>העגלה ריקה</h3> :
                <div>
                    <h2>העגלה שלך</h2>
                    {cart.list.map(({product_id, name, price, quantity, image}) => (
                        <div className={productItem} key={product_id}>
                            <div><img src={image} /></div>
                            <div>
                                <h4>{name}</h4>
                                <h4>₪{price}</h4>
                                <Quantity product_id={product_id} quantity={quantity} setCart={setCart} />
                                <button className={btnRemove} onClick={() => setCart({ type: "REMOVE_FROM_CART", payload: product_id })}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
            {cart.list.length === 0 ? '' :
            <div className={continueToBy}>
                <h3>סה"כ ₪{cart.totalItemsPrice}</h3>
                <button onClick={() => setCart({ type: "CLEAR_CART" })}>ניקוי</button>
                <button onClick={() => route.push('/cart')}>המשכי לתשלום</button>
            </div>
            }
        </div>
        </>
    )
}

export default SideCart;