import { shippings } from './shipping.module.scss';

const Shipping = ({ shipping, setShipping }) => {
    return(
        <div className={shippings}>
            <label>
                <input checked={shipping.method === "local_pickup"} type="radio" name="shipping" onChange={() => setShipping({ type: "local_pickup" })} />
                <p>🤙 איסוף עצמי (מחפץ חיים, בתיאום) - חינם</p>
            </label>
            <label>
                <input checked={shipping.method === "free_shipping"} type="radio" name="shipping" onChange={() => setShipping({ type: "free_shipping" })}  />
                <p>📍 איסוף מנקודת חלוקה - ₪25</p>
            </label>
            <label>
                <input checked={shipping.method === "flat_rate"} type="radio" name="shipping" onChange={() => setShipping({ type: "flat_rate" })}  />
                <p>🚚 שליח עד הבית - ₪35</p>
            </label>
        </div>
    )
}

export default Shipping;