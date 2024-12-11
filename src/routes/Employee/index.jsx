import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import All from "./All";
import New from "./New";

const Employee = () => {
  const { companyId } = useParams();

  const MAIN_LINKS = [
    { label: "All Employees", route: "" },
    { label: "New Employee", route: "new" },
  ];

  const BOTTOM_LINKS = [
    { label: "Back to Clients", route: `/${companyId}/clients` },
  ];

  return (
    <div className="w-screen h-screen flex items-stretch">
      <Sidebar mainLinks={MAIN_LINKS} bottomLinks={BOTTOM_LINKS} />
      <main className="flex-1 bg-green-500 p-10 overflow-auto">
        <Routes>
          <Route path="" element={<All />} />
          <Route path="new" element={<New />} />
          <Route path=":employeeId" element={<New />} />
        </Routes>
      </main>
    </div>
  );
};

export default Employee;
