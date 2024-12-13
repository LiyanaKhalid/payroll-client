/* eslint-disable react/prop-types */

const ActionButton = ({ label, color, onClick }) => (
  <button
    className={`px-2 py-0.5 bg-transparent text-${color}-500 rounded border border-${color}-500 hover:bg-${color}-500 hover:text-white duration-150`}
    onClick={onClick}
  >
    {label}
  </button>
);

const ClientList = ({ clients, onEditClient, onViewEmployees }) => {
  if (!clients?.length) {
    return (
      <div className="min-h-32 flex justify-center items-center bg-white rounded text-gray-400">
        No clients to display
      </div>
    );
  }

  return (
    <table className="bg-white w-full rounded overflow-hidden">
      <thead className="border-b font-semibold bg-gray-100">
        <tr>
          <td className="px-3 py-1.5">Name</td>
          <td className="px-3 py-1.5 w-80">Actions</td>
        </tr>
      </thead>
      <tbody className="divide-y">
        {clients.map((item) => (
          <tr key={item.id}>
            <td className="px-3 py-2">
              <span
                onClick={() => onEditClient(item.id)}
                className="cursor-pointer hover:text-green-500"
              >
                {item.name}
              </span>
            </td>
            <td className="px-3 py-1">
              <div className="flex flex-wrap gap-1 text-sm">
                <ActionButton
                  label="Staff"
                  color="green"
                  onClick={() => onViewEmployees(item.id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientList;
