import { Form as FormikForm, Field, ErrorMessage } from "formik";
import { FIELDS } from "./constants";



const Form = () => {
  return (
    <FormikForm>
      <div className="min-w-screen min-h-screen bg-green-500 flex flex-col justify-center items-center">
      
        <h2 className="text-2xl font-semibold mb-5">LOGIN</h2>
        <div className="bg-white w-full max-w-[400px] p-10 px-15 flex flex-col gap-4 rounded-lg">
          {FIELDS.map((item) => (
            <div key={item.name} className="w-full flex flex-col gap-1">
              <label htmlFor={item.name}>{item.label}</label>
              <Field
                type={item.type}
                name={item.name}
                className="border px-2.5 py-1.5 rounded-md"
              />
              <ErrorMessage name={item.name} />
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-500 rounded-md px-2.5 py-1.5 mt-5"
          >
            Login
          </button>
        </div>
      </div>
    </FormikForm>
  );
};

export default Form;
