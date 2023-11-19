import { Navigate, Route } from "react-router-dom";

const isAuthenticated = () => {
  // Check authentication status based on your criteria (e.g., token existence, validity, etc.)
  return !!localStorage.getItem("token");
};

const AuthenticatedRoute = ({ path, element }: { path: string; element: React.ReactNode }) => {
  return isAuthenticated() ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};
export default AuthenticatedRoute;