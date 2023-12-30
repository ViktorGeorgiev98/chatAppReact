import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthProvider";

const AuthGuard = (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <Outlet />
    )
}

export default AuthGuard;