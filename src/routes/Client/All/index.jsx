import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clientsApi from "../../../apis/clients";
import PageLoader from "../../../components/PageLoader";
import Sidebar from "../../../components/Sidebar";
import ClientList from "./ClientList";

const All = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState();

  const { companyId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await clientsApi.fetchAll(companyId);
      setClients(data.clients);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onAddClient = () => {
    navigate("new");
  };

  const onDeleteClient = async (clientId) => {
    try {
      await clientsApi.deleteOne(clientId);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const onViewEmployees = (clientId) => {
    navigate(`${clientId}/employees`);
  };

  const onAddEmployee = (clientId) => {
    navigate(`${clientId}/employees/new`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="w-screen min-h-screen flex items-stretch">
      <Sidebar actions={[{ label: "Add Client", callback: onAddClient }]} />
      <main className="flex-1 bg-green-500 flex justify-center items-center p-5">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-5">Client list</h2>
          <ClientList
            clients={clients}
            onDeleteClient={onDeleteClient}
            onViewEmployees={onViewEmployees}
            onAddEmployee={onAddEmployee}
          />
        </div>
      </main>
    </div>
  );
};

export default All;
