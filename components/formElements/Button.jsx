import { btn } from './elements.module.scss';

const Button = ({ children, func }) => (
    <button className={btn} onClick={func}>{children}</button>
)

export default Button;