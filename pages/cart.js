import { useContext } from 'react';
import PageHead from './../components/pageHead/PageHead';
import Summary from '../components/cart/Summary';
import TableCart from '../components/cart/TableCart';
import { CartContext } from '../context/CartProvider';
import { cartPage, btnBlack } from '../styles/cart.module.scss';

const Cart = () => {
    const { cart, setCart, shipping, setShipping } = useContext(CartContext);
    return (
        <div className={cartPage}>
            <PageHead title={'סל קניות'} description={'סל הקניות'} />
            {cart.numberOfItems === 0 ? <h1 style={{ color: "rgb(105, 0, 176)" }}>סל הקניות ריק</h1> :
                <>
                    <TableCart list={cart.list} setCart={setCart} />
                    <Summary cart={cart} shipping={shipping} setShipping={setShipping} />
                </>
            }
        </div>
    )
}

export default Cart;