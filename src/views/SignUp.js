import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

// installed yup and axios; created schema

import schema from "../validation/signUpSchema";
import SignUpForm from "../components/SignUpForm";

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
  let history = useHistory();
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
    /* Axios.get all users. If the newUser has the same username as another, don't allow them to progress to the next page and give matching username error 
    
    Break this function and setButton to disabled

    // pass setCurrentUser() to whatever the newuser is, passed down from the parent (App.js). if currentUser = [] then do this
    */
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
