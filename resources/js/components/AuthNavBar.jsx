import { Navigate, Outlet } from 'react-router-dom';

function AuthNavBar({ user }) {
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthNavBar;
