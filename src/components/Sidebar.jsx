/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import companiesApi from "../apis/companies";

const Sidebar = ({ actions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState();

  const { companyId } = useParams();
  const navigate = useNavigate();

  const getCompanyDetails = async () => {
    setIsLoading(true);
    const storedDetails = JSON.parse(
      localStorage.getItem("selected-company") || {}
    );
    // Use local stored details if valid, else fetch from server
    if (storedDetails.id === companyId) {
      setCompany(storedDetails);
    } else {
      try {
        const { data } = await companiesApi.fetchOne(companyId);
        localStorage.setItem("selected-company", JSON.stringify(data.company));
        setCompany(data.company);
      } catch (err) {
        // If company details fetching fails,
        // Go to company selection page
        navigate("/");
        console.error(err);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCompanyDetails();
  }, [companyId]);

  if (isLoading) {
    return (
      <aside className="flex-none min-w-56 flex justify-center items-center">
        <div className="w-14 h-14 border-8 border-green-500 border-b-transparent rounded-full animate-spin" />
      </aside>
    );
  }

  return (
    <aside className="flex-none min-w-60 flex flex-col">
      <div className="flex-1 flex flex-col gap-3 p-7 overflow-y-auto">
        {actions.map((item, idx) => (
          <button
            key={`action-${idx}`}
            onClick={item.callback}
            className="bg-green-500 px-2 py-1.5 rounded-full duration-150 hover:scale-105 hover:bg-green-600"
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
