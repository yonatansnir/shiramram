import ShippingOption from './ShippingOption';
import { shippingStyle } from './shipping.module.scss';
import Button from '../formElements/Button';

const Shipping = ({ step, setStep, shipping, setShipping }) => {
    let { method } = shipping

    return(
        <div className={shippingStyle}>
            <h3>
                <span>{step <= 2 ? '2' : '✔️'}</span> אופן משלוח 
                <span onClick={() => setStep(2)}>{step <= 2 ? '' : 'עריכה'}</span>
            </h3>
            {step !== 2 ? 
                <p>
                {method === "local_pickup" ? 'איסוף עצמי בתיאום מראש' : ''}
                {method === "free_shipping" ? 'איסוף מנקודת חלוקה' : ''}
                {method === "flat_rate" ? 'שליח עד הבית' : ''}
                </p> : 
            <>
                <ShippingOption shipping={shipping} setShipping={setShipping} />
                <Button func={() => setStep(3)}>המשך</Button>
            </>
            }
        </div>
    )
}

export default Shipping;