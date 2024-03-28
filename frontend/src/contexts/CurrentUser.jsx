// CurrentUserProvider.jsx
import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getLoggedInUser = async () => {
            try {
                const response = await fetch('http://localhost:5050/authentication/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                //console.log("this is children", children)
                const user = await response.json();
                setCurrentUser(user);
                //console.log("this is the user", user)
            } catch (error) {
                console.error(error);
            }
        };
        getLoggedInUser();
    }, []);

    window.setCurrentUser = setCurrentUser

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}

export default CurrentUserProvider;
