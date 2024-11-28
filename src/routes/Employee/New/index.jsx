import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import employeesApi from "../../../apis/employees";
import PageLoader from "../../../components/PageLoader";
import Form from "./Form";
import { FIELDS, SCHEMA } from "./constants";

const New = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState();

  // employeeId is available if in edit path, else will be undefined
  // So, employeeId having value means edit form, else add form
  const { companyId, clientId, employeeId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await employeesApi.fetchOne(employeeId);
      setEmployee(data.employee);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Support update submit also
  const onFormSubmit = async (values) => {
    try {
      const payload = { ...values, client_id: clientId, company_id: companyId };
      const { data } = !employee
        ? await employeesApi.createOne(payload)
        : await employeesApi.updateOne(employee.id, payload);
      if (data.error) throw new Error(data.error);
      navigate(`/${companyId}/clients/${clientId}/employees`);
    } catch (err) {
      console.error(err);
    }
  };

  const getInitialFormValues = () => {
    return FIELDS.reduce(
      (values, field) => ({
        ...values,
        [field.name]: employee?.[field.name] ?? "",
      }),
      {}
    );
  };

  useEffect(() => {
    if (employeeId) fetchData();
  }, [employeeId]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-w-screen min-h-screen bg-green-500 flex flex-col justify-center items-center p-10">
      <h2 className="text-2xl font-semibold mb-5">Add Employee Details</h2>
      <Formik
        initialValues={getInitialFormValues()}
        validationSchema={SCHEMA}
        onSubmit={onFormSubmit}
      >
        {() => <Form />}
      </Formik>
    </div>
  );
};

export default New;
