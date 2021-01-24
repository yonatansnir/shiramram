import { useRouter } from 'next/router';
import ShippingOption from '../checkout/ShippingOption';
import { summary, totalSum, shippings } from './summary.module.scss';

const Summary = ({ cart, shipping, setShipping }) => {
    const router = useRouter();
    
    return(
        <div className={summary}>
            <h2>סיכום הזמנה</h2>
            <div>
                <h3>סכום ביניים</h3>
                <h3>₪{cart.totalItemsPrice}</h3>
            </div>
            <div>
                <h3>משלוח<p style={{ fontSize: "12px", color: "grey" }}>משלוחים חינם מעל 200 ש"ח</p></h3>
                <h3>{cart.totalItemsPrice >= 200 ? 'חינם' : '₪'+shipping.price}</h3>
            </div>
            <div className={shippings}>
                <ShippingOption shipping={shipping} setShipping={setShipping} />
            </div>
            <div className={totalSum}>
                <h3>סך הכל<span>המס כלול במחיר</span></h3>
                <h3>₪{cart.totalItemsPrice >= 200 && shipping.method !== "flat_rate" ? cart.totalItemsPrice : cart.totalItemsPrice + shipping.price }</h3>
            </div>
            <button onClick={() => router.push('/checkout')}>מעבר לתשלום</button>
        </div>
    )
}

export default Summary;