import { checkoutPage } from './../styles/checkout.module.scss';
import PageHead from './../components/pageHead/PageHead';
import Billing from '../components/cart/Billing';
import { useContext, useEffect, useState } from 'react';
import Shipping from '../components/checkout/Shipping';
import { CartContext } from '../context/CartProvider';
import CreditCard from '../components/checkout/CreditCard';
import CheckSum from '../components/checkout/CheckSum';

const checkout = () => {
    const { cart, shipping, setShipping } = useContext(CartContext);
    let [step, setStep] = useState(1);

    const [billingForm, setBillingForm] = useState({
        first_name: "",
        last_name: "",
        address_1: "",
        address_2: "",
        city: "",
        postcode: "",
        country: "ישראל",
        email: "",
        phone: ""
    });

    useEffect(() => {
        let savedData = localStorage.getItem('billing');
        if (savedData)
            setBillingForm(JSON.parse(savedData));
    }, [])
    const sendOrder = () => {
        const data = {
            billing: billingForm,
            shipping: billingForm,
            line_items: list,
            shipping_lines: finalOrder.shippingMethod
        }
        fetch('/api/orders', {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(data)
        })
            .then(resp => console.log(resp))
    }

    return (
        <div className={checkoutPage}>
            <PageHead title={'תשלום'} description={'עמוד התשלום'} />
            <div>
                <Billing step={step} setStep={setStep} billingForm={billingForm} setBillingForm={setBillingForm} />
                <Shipping step={step} setStep={setStep} shipping={shipping} setShipping={setShipping} />
                <CreditCard />
                {/* <button onClick={sendOrder}>ביצוע</button> */}
            </div>
            <div>
                <CheckSum cart={cart} shipping={shipping} />
            </div>
        </div>
    )
}

export default checkout;