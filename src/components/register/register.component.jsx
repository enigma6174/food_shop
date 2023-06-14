import { useState } from "react";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./register.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const RegisterComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={"register-container"}>
        <h2>Don&apos;t have an account?</h2>
        <span>Register With Email And Password</span>
        <form onSubmit={handleSubmit}>
          <FormInputComponent
            label={"Display Name"}
            type={"text"}
            onChange={handleChange}
            name={"displayName"}
            value={displayName}
            required
          />

          <FormInputComponent
            label={"Email"}
            type={"email"}
            onChange={handleChange}
            name={"email"}
            value={email}
            required
          />

          <FormInputComponent
            label={"Password"}
            type={"password"}
            onChange={handleChange}
            name={"password"}
            value={password}
            required
          />

          <FormInputComponent
            label={"Confirm Password"}
            type={"password"}
            onChange={handleChange}
            name={"confirmPassword"}
            value={confirmPassword}
            required
          />

          <Button type={"submit"}>Register</Button>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
