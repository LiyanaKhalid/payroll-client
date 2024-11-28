import { Route, Routes } from "react-router-dom";
import New from "./New";

const Employee = () => {
  return (
    <Routes>
      <Route path="" element={<div>All employees</div>} />
      <Route path="new" element={<New />} />
    </Routes>
  );
};

export default Employee;
