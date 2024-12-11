/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import companiesApi from "../apis/companies";

const Sidebar = ({ mainLinks, bottomLinks }) => {
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
    <aside className="flex-none min-w-60 flex flex-col border-r">
      <h3 className="px-5 py-3 font-semibold text-2xl bg-gray-100">
        {company.name}
      </h3>
      <Link
        to="/"
        className="flex justify-between px-5 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 border-black border-t border-b"
      >
        <span>Switch company</span>
        <span>&gt;</span>
      </Link>
      {mainLinks && (
        <div className="flex-1 flex flex-col gap-2 p-3 overflow-y-auto">
          {mainLinks.map((item, idx) => (
            <Link
              key={`action-${idx}`}
              to={item.route}
              className="bg-transparent px-3 py-1.5 rounded duration-150 hover:bg-green-500 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
      {bottomLinks && (
        <div className="flex flex-col gap-2 p-3 overflow-y-auto border-t">
          {bottomLinks.map((item, idx) => (
            <Link
              key={`action-${idx}`}
              to={item.route}
              className="bg-transparent px-3 py-1.5 rounded duration-150 hover:bg-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
