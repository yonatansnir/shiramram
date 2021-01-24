import { checkSumStyle, listItem } from './checksum.module.scss';

const CheckSum = ({ cart, shipping }) => {

    return(
        <div className={checkSumStyle}>
            <h3>סיכום פרטי הזמנה</h3>
            {cart.list.map(item => (
                <div key={item.product_id} className={listItem}>
                    <div>תמונה</div>
                    <div><p>{item.name}</p><p>כמות: {item.quantity}</p></div>
                    <div>₪{item.quantity * item.price}</div>
                </div>
            ))}
            <hr />
            <div className={listItem}>
                <div>פריטים</div>
                <div>₪{cart.totalItemsPrice}</div>
            </div>
            <div className={listItem}>
                <div>משלוח</div>
                <div>₪{shipping.price}</div>
            </div>
            <div className={listItem} style={{ fontSize: "25px" }}>
                <div>סך הכל<span>כולל מע"מ</span></div>
                <div>₪{cart.totalItemsPrice >= 200 && shipping.method === "free_shipping"  ? cart.totalItemsPrice : cart.totalItemsPrice + shipping.price}</div>
            </div>
        </div>
    )
}

export default CheckSum;