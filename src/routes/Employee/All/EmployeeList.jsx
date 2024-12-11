/* eslint-disable react/prop-types */

const ActionButton = ({ label, color, onClick }) => (
  <button
    className={`px-2 py-0.5 bg-transparent text-${color}-500 rounded border border-${color}-500 hover:bg-${color}-500 hover:text-white duration-150`}
    onClick={onClick}
  >
    {label}
  </button>
);

const EmployeeList = ({ employees, onEditEmployee }) => {
  if (!employees?.length) {
    return (
      <div className="min-h-32 flex justify-center items-center bg-white rounded text-gray-400">
        No employees to display
      </div>
    );
  }

  return (
    <table className="bg-white w-full rounded overflow-hidden">
      <thead className="border-b font-semibold bg-gray-100">
        <tr>
          <td className="px-3 py-1.5 w-44">Emp ID</td>
          <td className="px-3 py-1.5 min-w-60">Name</td>
          <td className="px-3 py-1.5 w-40">Mobile No</td>
          <td className="px-3 py-1.5">Actions</td>
        </tr>
      </thead>
      <tbody className="divide-y">
        {employees.map((item) => (
          <tr key={item.id}>
            <td className="px-3 py-2">{item.employee_id}</td>
            <td className="px-3 py-2">{item.name}</td>
            <td className="px-3 py-2">{item.mobile_number}</td>
            <td className="px-3">
              <div className="flex flex-wrap gap-1 text-sm">
                <ActionButton
                  label="Edit"
                  color="green"
                  onClick={() => onEditEmployee(item.id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
