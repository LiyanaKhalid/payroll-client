import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import All from "./All";
import New from "./New";

const Client = () => {
  const MAIN_LINKS = [
    { label: "All Clients", route: "" },
    { label: "New Client", route: "new" },
  ];

  return (
    <div className="w-screen h-screen flex items-stretch">
      <Sidebar mainLinks={MAIN_LINKS} />
      <main className="flex-1 bg-green-500 p-10 overflow-auto">
        <Routes>
          <Route path="" element={<All />} />
          <Route path="new" element={<New />} />
          <Route path=":clientId" element={<New />} />
        </Routes>
      </main>
    </div>
  );
};

export default Client;
