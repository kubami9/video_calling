import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth.ts";
import { Credentials } from "@shared/types/types.ts";

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<
    Credentials
  >();

  const loginFromForm = (credentials: Credentials) => {
    console.log(credentials);
    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit(loginFromForm)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email", { required: "Email address is required." })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register("password", { required: "Password is required." })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}
      <br />
      <input type="submit" value={"Login"} />
    </form>
  );
};

export default Login;
