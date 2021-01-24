import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        
    }, [])

    return <UserContext.Provider value={{ cart, user }}>{children}</UserContext.Provider>
}

export default UserProvider;