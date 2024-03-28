import { createContext, useState, useEffect } from "react";

// Create the context
export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
    // Initialize state for currentUser
    const [currentUser, setCurrentUser] = useState(null);

    // Fetch the logged-in user data on component mount
    useEffect(() => {
        const getLoggedInUser = async () => {
            try {
                const response = await fetch('http://localhost:5050/authentication/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const user = await response.json();
                setCurrentUser(user);
                
                
            } catch (error) {
                console.error(error);
            }
        };
        getLoggedInUser();
    }, [currentUser]);
    window.setCurrentUser = setCurrentUser
    // Pass currentUser and setCurrentUser to the context value
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider;

