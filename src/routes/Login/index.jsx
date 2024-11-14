import { Formik } from "formik";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";
import authApi from "../../apis/auth";

const Login = () => {
  const onFormSubmit = async (values) => {
    try {
      const { data } = await authApi.generateToken(values);
      if (!data.accessToken || !data.refreshToken) return;
      localStorage.setItem("access-token", data.accessToken);
      localStorage.setItem("refresh-token", data.refreshToken);
      window.location.href = "/";
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

export default Login;
