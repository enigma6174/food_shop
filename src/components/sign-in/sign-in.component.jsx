import FormInputComponent from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInWithCredentials,
  signInWithGoogleGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithCredentials(email, password);
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password!");
          break;
        case "auth/user-not-found":
          alert("User Not Found!");
          break;
        default:
          console.error(error);
      }
    }
  };

  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithGoogleGooglePopup();
      await createUserDocumentFromAuth(user);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={"sign-in-container"}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInputComponent
            label={"email"}
            name={"email"}
            type={"email"}
            onChange={handleChange}
            value={email}
            required
          />
          <FormInputComponent
            label={"password"}
            name={"password"}
            type={"password"}
            onChange={handleChange}
            value={password}
            required
          />
          <div className={"buttons-container"}>
            <Button type={"submit"}>SIGN IN</Button>
            <Button
              type={"button"}
              buttonType={"google"}
              onClick={loginWithGoogle}
            >
              GOOGLE SIGN IN
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInComponent;
