import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import { menu, darkend, open } from './menu.module.scss';

const Menu = () => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className={menu}>
            <div className={isOpen ? darkend : ''} onClick={() => setIsOpen(!isOpen)}></div>
            <MenuIcon func={() => setIsOpen(!isOpen)} />
            <ul className={isOpen ? open : ''}>
                <Link href="/"><li>דף הבית</li></Link>
                <Link href="/pages/110"><li>עליי</li></Link>
                <Link href="/blog"><li>בלוג</li></Link>
                <Link href="/products"><li>המוצרים שלי</li></Link>
                <Link href="/pages/105"><li>מדיניות משלוחים והחזרות</li></Link>
                <Link href="/"><li>סירטונים שלי</li></Link>
            </ul>
        </div>
    )
}

export default Menu;