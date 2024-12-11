import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeesApi from "../../../apis/employees";
import PageLoader from "../../../components/PageLoader";
import EmployeeList from "./EmployeeList";

const All = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState();

  const { clientId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await employeesApi.fetchAll(clientId);
      setEmployees(data.employees);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onEditEmployee = (employeeId) => {
    navigate(`${employeeId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-5">Staff list</h2>
      <EmployeeList employees={employees} onEditEmployee={onEditEmployee} />
    </>
  );
};

export default All;
