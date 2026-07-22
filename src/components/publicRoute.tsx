import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext";

const PublicRoute = () => {
  const { isAuth, loading } = useAppData();

  if (loading) return null;

  //here if we are authenticated then we can go to homepage otherwise we can only see loginPage(outlet)
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
