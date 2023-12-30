import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext();



export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        setUser(previousUser => ({}));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    const login = (userData) => {
       
        setUser(previousUser => ({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            accessToken: userData.accessToken,
            _id: userData._id
        }));
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.accessToken)
    }

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        console.log({token: token}); // Check what value is retrieved from localStorage
        if (!!token && !!user.accessToken) {
            return true;
        } else {
            return false;
        }
        // return !!user.accessToken;
    }

    const getAccessToken = () => {
        return localStorage.getItem("token");
    }

    const getUsername = () => {
        return user.username
    }

    const authContextValue = {
        getUsername,
        user,
        login,
        logout,
        isAuthenticated,
        getAccessToken
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}


