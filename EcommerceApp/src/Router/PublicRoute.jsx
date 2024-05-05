import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Hooks/useAuthStore';

export const PublicRoute = ({ children }) => {
    const { user } = useAuthStore();
    const navigate = useNavigate(); // Obtiene la función de navegación

    // Utilizamos un operador ternario para decidir qué renderizar
    return user.userState !== "AUTHENTICATED" ? children : (navigate('/'), null);
};
