/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ActionButton = ({ label, color, onClick }) => (
  <button
    className={`px-2 py-0.5 text-${color}-500 rounded border border-${color}-500 hover:bg-${color}-500 hover:text-white duration-150`}
    onClick={onClick}
  >
    {label}
  </button>
);

const ClientList = ({
  clients,
  onDeleteClient,
  onViewEmployees,
  onAddEmployee,
}) => {
  if (!clients?.length) {
    return (
      <div className="min-h-32 flex justify-center items-center bg-white rounded text-gray-400">
        No clients to display
      </div>
    );
  }

  return (
    <ul className="list-none px-5 py-3 bg-white rounded divide-y">
      {clients.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center py-2.5 gap-5"
        >
          <Link
            to={item.id}
            className="text-black cursor-pointer hover:scale-105"
          >
            {item.name}
          </Link>
          <div className="flex-none flex gap-2 text-sm">
            <ActionButton
              label="View Staff"
              color="green"
              onClick={() => onViewEmployees(item.id)}
            />
            <ActionButton
              label="Add Staff"
              color="green"
              onClick={() => onAddEmployee(item.id)}
            />
            <ActionButton
              label="Delete"
              color="red"
              onClick={() => onDeleteClient(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
