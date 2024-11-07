import * as yup from 'yup';


export const FIELDS = [
  {
    name: "username",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
];


export const SCHEMA = yup.object({
  username:yup.string().required('username is required'),
  password:yup.string().required('password is required').min(5,'password should have atleast 5 characters')
})