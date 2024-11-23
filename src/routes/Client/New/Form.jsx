/* eslint-disable react/prop-types */

import { Form as FormikForm, Field, ErrorMessage } from "formik";
import { FIELDS } from "./constants";

const SelectInput = ({ data }) => (
  <Field
    as="select"
    name={data.name}
    className="border px-2.5 py-1.5 rounded-md"
  >
    <option value="" label="Select an option" />
    {data.options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </Field>
);

const TextInput = ({ data }) => (
  <Field
    type={data.type}
    name={data.name}
    className="border px-2.5 py-1.5 rounded-md"
  />
);

const Form = () => {
  const inputTypeMap = {
    select: SelectInput,
    text: TextInput,
  };

  return (
    <FormikForm>
      <div className="min-w-screen min-h-screen bg-green-500 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-5">Add Client Details</h2>
        <div className="bg-white p-10 px-15 rounded-lg space-y-7">
          <div className="grid grid-cols-[300px_300px] gap-x-7 gap-y-4">
            {FIELDS.map((item) => {
              const InputFieldComponent = inputTypeMap[item.type] || null;
              return (
                <div key={item.name} className="w-full flex flex-col gap-1">
                  <label htmlFor={item.name}>{item.label}</label>
                  {InputFieldComponent && <InputFieldComponent data={item} />}
                  <span className="text-red-400 text-xs">
                    <ErrorMessage name={item.name} />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full flex justify-end border-t">
            <button
              type="submit"
              className="bg-green-500 rounded-md px-5 py-1.5 mt-5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </FormikForm>
  );
};

export default Form;
