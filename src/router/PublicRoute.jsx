import { Navigate } from 'react-router-dom';
import useAuth from '../contexts/Auth/hooks/useAuth';

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/chat" replace />;
    }

    return children;
};

export default PublicRoute;

