import React from "react";
import { useAuthStore } from "../Hooks/useAuthStore";
import {Navigate} from 'react-router-dom'
import { Auth } from "../Auth/Pages/Auth";

export const PrivateRoute = ({ children }) => {
  const { user} = useAuthStore();

  return user.userState === "AUTHENTICATED" 
  ? children 
  : <Navigate to="/auth"/>;
};
