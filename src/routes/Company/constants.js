import * as yup from "yup";

export const FIELDS = [
  {
    name: "name",
    type: "text",
    label: "Client Name",
  },
  {
    name: "address",
    type: "text",
    label: "Address",
  },
  {
    name: "gst",
    type: "text",
    label: "GST",
  },
  {
    name: "tan",
    type: "text",
    label: "TAN",
  },
  {
    name: "contact_number",
    type: "text",
    label: "Contact No.",
  },
  {
    name: "contact_value",
    type: "text",
    label: "Contact Value",
  },
  {
    name: "contract_category",
    type: "text",
    label: "Contract Category",
  },
  {
    name: "contract_duration",
    type: "text",
    label: "Contract Duration",
  },
  {
    name: "days",
    type: "text",
    label: "Days",
  },
  {
    name: "epbg_amount",
    type: "text",
    label: "EPBG Amount",
  },
  {
    name: "epbg_expiry_date",
    type: "text",
    label: "EPBG Expiry Date",
  },
  {
    name: "epbg_date",
    type: "text",
    label: "EPBG Date",
  },
];

export const SCHEMA = yup.object({
  name: yup.string().required("client name is required"),
  address: yup
    .string()
    .required("address is required")
    .min(8, "address should have atleast 8 characters"),
  gst: yup.string().required("GST is required"),
  tan: yup.string().required("TAN is required"),
  contact_number: yup.string().required("contact number is required"),
  contact_value: yup.string().required("contact value is required"),
  contract_category: yup.string().required("contract category is required"),
  contract_duration: yup.string().required("contract duration is required"),
  days: yup.string().required("days is required"),
  epbg_amount: yup.string().required("EPBG amount is required"),
  epbg_expiry_date: yup.string().required("EPBG expiry date is required"),
  epbg_date: yup.string().required("EPBG date is required"),
});
