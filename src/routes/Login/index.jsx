import { Formik } from "formik";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";
import authApi from "../../apis/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  
  const onFormSubmit = (values) => {
    authApi.createSession(values).then((response) => setUser(response.data));
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

export default Login;
