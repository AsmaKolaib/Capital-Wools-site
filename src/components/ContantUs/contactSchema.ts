import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactShema = yup.object().shape({
  yourEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required "),
    yourPhone: yup
    .string()
    .required(" Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Too short")
    .max(12, "Too long"),
});