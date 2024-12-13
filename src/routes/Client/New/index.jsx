import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import clientsApi from "../../../apis/clients";
import PageLoader from "../../../components/PageLoader";
import Error from "../../../components/Error";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";

const New = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState();

  // clientId is available if in edit path, else will be undefined
  // So, clientId having value means edit form, else add form
  const { companyId, clientId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await clientsApi.fetchOne(clientId);
      setClient(data.client);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Support update submit also
  const onFormSubmit = async (values) => {
    try {
      const payload = { ...values, company_id: companyId };
      const { data } = !client
        ? await clientsApi.createOne(payload)
        : await clientsApi.updateOne(client.id, payload);
      if (data.error) throw new Error(data.error);
      navigate(`/${companyId}/clients`);
    } catch (err) {
      console.error(err);
    }
  };

  const getInitialFormValues = () => {
    return FIELDS.reduce(
      (values, field) => ({
        ...values,
        [field.name]: client?.[field.name] ?? "",
      }),
      {}
    );
  };

  useEffect(() => {
    if (clientId) fetchData();
  }, [clientId]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (clientId && !client) {
    return <Error title="Could not load client" />;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-5">
        {client ? "Update" : "Add"} Client Details
      </h2>
      <Formik
        initialValues={getInitialFormValues()}
        validationSchema={SCHEMA}
        onSubmit={onFormSubmit}
      >
        {() => <Form />}
      </Formik>
    </>
  );
};

export default New;
