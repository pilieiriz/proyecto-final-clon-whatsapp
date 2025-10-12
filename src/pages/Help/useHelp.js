import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/Auth/hooks/useAuth";


const useHelp = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleBack = () => {
        if (isAuthenticated) {
            navigate('/chat');
        } else {
            navigate('/');
        }
    };

    return { handleBack };
};

export default useHelp;
