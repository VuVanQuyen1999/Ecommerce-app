import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
  const getTokenFromLocalStorage = useSelector((state) => state?.auth?.user);
  return getTokenFromLocalStorage?.token === undefined ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
