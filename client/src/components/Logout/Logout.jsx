import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider";

const Logout = () => {
    const navigate = useNavigate();
    const { logout, getAccessToken } = useAuth();
    console.log("Perform logout")
    const accessToken = getAccessToken();
    useEffect(() => {
        console.log("Logging out")
        const performLogout = async () => {
            console.log("performing logout")
            try {
                const response = await fetch('http://localhost:3030/users/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "X-Authorization": accessToken,
                    }
                });
                console.log({"response": response.status})
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
                logout();
                navigate("/");
            }
        };

        performLogout();
    }, []);
}

export default Logout;