import { Route, Routes } from "react-router-dom";
import All from "./All";
import New from "./New";

const Client = () => {
  return (
    <Routes>
      <Route path="" element={<All />} />
      <Route path="new" element={<New />} />
    </Routes>
  );
};

export default Client;
