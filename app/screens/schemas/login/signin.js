import * as yup from "yup";

let emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, { message: "Email inválido." })
    .required("Email obrigatório"),
  password: yup
    .string()
    .matches(senhaRegex, { message: "Senha inválida" })
    .required("Senha obrigatória."),
});

export { SignInSchema };
