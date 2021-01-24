import { creditCards } from './creditcard.module.scss';

const CreditCard = () => {
    return (
        <div className={creditCards}>
            <h3>
                <span>{true ? '3' : '✔️'}</span> תשלום 
                <span onClick={() => setStep(1)}>{true ? '' : 'עריכה'}</span>
            </h3>
        </div>
    )
}

export default CreditCard;