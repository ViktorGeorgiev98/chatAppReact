import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthProvider";

const GuestGuard = (props) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated()) {
       return <Navigate to='/home' />
    }

    return (
    <Outlet />
    )
}

export default GuestGuard;