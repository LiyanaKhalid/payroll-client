import * as yup from "yup";

export const FIELDS = [
  {
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    name: "address",
    type: "text",
    label: "Address",
  },
  {
    name: "employee_id",
    type: "text",
    label: "Employee ID",
  },
  {
    name: "epf_uan",
    type: "text",
    label: "EPF UAN",
  },
  {
    name: "bank_account_number",
    type: "text",
    label: "Bank A/C No.",
  },
  {
    name: "ifsc",
    type: "text",
    label: "IFSC",
  },
  {
    name: "bank_name",
    type: "text",
    label: "Bank Name",
  },
  {
    name: "esi_number",
    type: "text",
    label: "ESI Number",
  },
  {
    name: "aadhaar_number",
    type: "text",
    label: "Aadhaar Number",
  },
  {
    name: "date_of_birth",
    type: "text",
    label: "DOB",
  },
  {
    name: "mobile_number",
    type: "text",
    label: "Mobile Number",
  },
  {
    name: "daily_wage",
    type: "text",
    label: "Daily Wage",
  },
  {
    name: "bonus",
    type: "text",
    label: "Bonus",
  },
  {
    name: "allowance",
    type: "text",
    label: "Allowance",
  },
  {
    name: "contribution",
    type: "text",
    label: "Contribution",
  },
];

export const SCHEMA = yup.object({
  name: yup.string().required("employee name is required"),
  address: yup
    .string()
    .required("address is required")
    .min(8, "address should have atleast 8 characters"),
  employee_id: yup.string().required("employee id is required"),
  epf_uan: yup.string().required("epf uan is required"),
  bank_account_number: yup.string().required("bank account number is required"),
  ifsc: yup.string().required("ifsc is required"),
  bank_name: yup.string().required("bank name is required"),
  esi_number: yup.string().required("esi number is required"),
  aadhaar_number: yup.number().required("aadhaar number is required"),
  date_of_birth: yup.string().required("date of birth is required"),
  mobile_number: yup.string().required("mobile number is required"),
  daily_wage: yup.string().required("daily wage is required"),
  bonus: yup.string().required("bonus is required"),
  allowance: yup.string().required("allowance is required"),
  contribution: yup.string().required("contribution is required"),
});
