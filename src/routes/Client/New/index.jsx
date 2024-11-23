import { Formik } from "formik";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";

const New = () => {
  const { companyId } = useParams();

  const onFormSubmit = (values) => {
    console.log(companyId);
    console.log(values);
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
