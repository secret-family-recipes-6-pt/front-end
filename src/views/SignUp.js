import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import schema from "../validation/signUpSchema";
import SignUpForm from "../components/SignUpForm";

/*
 const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState(initialState);

  //The Register is not working fully yet.
  const handleChanges = (e) => {
    // console.log("value: ", e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitSignUp = (e) => {
    e.preventDefault();
    // validate();

    axiosWithAuth
      .post("/auth/register", credentials)
      .then((res) => {
        console.log("happy path: ", res.data);
        // localStorage.setItem("token", res.data);
        // history.push("/private");
      })
      .catch((err) => {
        console.log("sad path: ", err);
      });
  };

*/

const initialFormValues = {
  username: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialDisabled = true;
export default function SignUp({ setCurrentUser }) {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const registerUser = (newUser) => {
    axios
      .post("https://secret-family-recipes6.herokuapp.com/api/auth/register", newUser)
      .then((res) => {
        /* 
        check newUser against all other users
        if the user is unique, then setCurrentUser(res.data)
        history.push(/home)

        else,
        alert('user information is taken)
        */
        console.log(res.data);
      })
      .catch((err) => {
        setCurrentUser({ username: "admin", email: "admin@admin.com", password: "admin" });
        history.push("/home");
        debugger;
      })
      .finally(setFormValues(initialFormValues));
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    registerUser(newUser);
  };

  return (
    <>
      <SignUpForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors} />
    </>
  );
}
