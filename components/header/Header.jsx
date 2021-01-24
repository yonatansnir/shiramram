import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';
import SideCart from '../cart/SideCart';
import ShopingIcon from '../icons/ShopingIcon';
import UserIcon from '../icons/UserIcon';
import { header, user, cartNumber } from './header.module.scss';
import Menu from './Menu';

const Header = ({ children }) => {
    let [isCartOpen, setIsCartOpen] = useState(false);
    let { cart } = useContext(CartContext);

    const setCartOpen = () =>{
        setIsCartOpen(!isCartOpen)
    }

    return (
        <>
        <header className={header}>
            <Link href="/"><a><h1><img alt="logo-smileit" src="/assets/logo.png" height="80px" width="80px" /></h1></a></Link>
            <Menu />
            <div className={user}>
                <UserIcon />
                <span className={cartNumber} onClick={setCartOpen}>{cart.numberOfItems}</span>
                <ShopingIcon setCartOpen={setCartOpen} />
            </div>
        </header>
        <SideCart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
        {children}
        <h5 style={{ margin: "20px", padding: "0px 20px", color: "grey", textAlign: "center", fontWeight: "400" }}>Design & development by Yonatan Snir</h5>
        </>
    )
}

export default Header;