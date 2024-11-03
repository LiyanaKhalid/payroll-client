import { Formik } from "formik";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";

const Login = () => {
  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={FIELDS.reduce((values, field) => ({
        ...values,
        [field.name]: "",
      }),{})}
      validationSchema={SCHEMA}
      onSubmit={onFormSubmit}
    >
      {() => <Form />}
    </Formik>
  );
};

export default Login;
