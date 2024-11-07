import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const Router = () => {
  const { user } = useContext(AuthContext);

  console.log(user)
  if (user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
