import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import clientsApi from "../../../apis/clients";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";

const New = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();

  const onFormSubmit = async (values) => {
    try {
      const payload = { ...values, company_id: companyId };
      const { data } = await clientsApi.createOne(payload);
      if (data.error) throw new Error(data.error);
      navigate(`/${companyId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={FIELDS.reduce(
        (values, field) => ({
          ...values,
          [field.name]: "",
        }),
        {}
      )}
      validationSchema={SCHEMA}
      onSubmit={onFormSubmit}
    >
      {() => <Form />}
    </Formik>
  );
};

export default New;
