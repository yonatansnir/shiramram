import { useState } from 'react';
import { billingStyle, fullName } from './billing.module.scss';
import Input from '../formElements/Input';
import { checkForm, inputsObj } from './utils/checkForm';
import Button from '../formElements/Button';

const Billing = ({ step, setStep, billingForm, setBillingForm }) => {
    let { email, first_name, address_1, city, postcode, last_name, phone } = billingForm;

    const handleChange = (e) => {
        setBillingForm({...billingForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('billing', JSON.stringify(billingForm));
        setStep(2);
    }

    return(
        <form className={billingStyle} onSubmit={handleSubmit}>
            <h3>
                <span>{step === 1 ? '1' : '✔️'}</span> פרטי משלוח 
                <span onClick={() => setStep(1)}>{step === 1 ? '' : 'עריכה'}</span>
            </h3>
            {
                step !== 1 ?
                <div>
                    {email} <br />
                    {`${first_name} ${last_name},`} <br />
                    {`${address_1}, ${city} ${postcode}`}<br />
                    {phone}
                </div>
                :
                <>
                <div className={fullName}>
                    {inputsObj.filter(el => el.name === "first_name" || el.name === "last_name")
                    .map(input => <Input key={input.name} {...input} value={billingForm[input.name]} handleChange={handleChange} />)}
                </div>
                    {inputsObj.filter(el => el.name !== "first_name" && el.name !== "last_name")
                    .map(input => <Input key={input.name} {...input} value={billingForm[input.name]} handleChange={handleChange} />)}
                <div>
                    <h4>הערות להזמנה</h4>
                    <textarea rows="4" />
                </div>
                <Button>המשך</Button>
                </>
            }
        </form>
    )
}

export default Billing;