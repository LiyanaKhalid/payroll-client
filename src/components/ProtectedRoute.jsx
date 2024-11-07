import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, element }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) return <div>loading</div>;

  if (!user) return redirect("/login");

  return <Route path={path} element={element} />;
};

export default ProtectedRoute
