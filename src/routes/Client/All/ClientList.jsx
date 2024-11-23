/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ActionButton = ({ label }) => (
  <button className="px-2 py-0.5 rounded border border-green-500 hover:bg-green-500 hover:text-white duration-150">
    {label}
  </button>
);

const ClientList = ({ clients }) => {
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
          <div className="flex-none flex gap-2 text-sm text-green-500">
            <ActionButton label="View Staff" />
            <ActionButton label="Add Staff" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
