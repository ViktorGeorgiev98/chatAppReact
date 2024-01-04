import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider";

const Logout = () => {
    const navigate = useNavigate();
    const { logout, getAccessToken } = useAuth();

    useEffect(() => {
        const performLogout = async () => {
            try {
                const response = await fetch('http://localhost:3030/users/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 204) {
                    logout();
                    navigate("/");
                } else if (response.status === 200) {
                    return;
                } else {
                    throw new Error(response.statusText);
                }
            } catch(e) {
                console.log(e.message);
                return alert(e.message);
            }
        };

        performLogout();
    }, []);
}

export default Logout;