import RegisterComponent from "../../components/register/register.component";
import SignInComponent from "../../components/sign-in/sign-in.component";

import "./login.styles.scss";

const Login = () => {
  return (
    <>
      <div className={"login-container"}>
        <SignInComponent />
        <RegisterComponent />
      </div>
    </>
  );
};

export default Login;
