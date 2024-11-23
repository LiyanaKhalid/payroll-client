import { Route, Routes } from "react-router-dom";
import New from "./New";

const Client = () => {
  return (
    <Routes>
      <Route path="new" element={<New />} />
    </Routes>
  );
};

export default Client;
