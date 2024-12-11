import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clientsApi from "../../../apis/clients";
import PageLoader from "../../../components/PageLoader";
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

  const onEditClient = (clientId) => {
    navigate(`${clientId}`);
  };

  const onViewEmployees = (clientId) => {
    navigate(`${clientId}/employees`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-5">Client list</h2>
      <ClientList
        clients={clients}
        onEditClient={onEditClient}
        onViewEmployees={onViewEmployees}
      />
    </>
  );
};

export default All;
