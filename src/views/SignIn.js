import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

//  change Paper to Cards component

const useStyles = makeStyles((theme) => ({
  PapersStyle: {
    height: "70vh",
    width: "80%",
    margin: "5% auto 0 auto",
  },
  titleStyle: {
    fontSize: "5rem",
    textAlign: "center",
  },
  textFieldStyle: {
    width: "70%",
    padding: "2px",
  },
  ButtonStyle: {
    marginTop: "5%",
    height: "20%",
    width: "60%",
    borderRadius: "50px",
    fontSize: "1.75rem",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const history = useHistory();
  const [credentials, setCredentials] = useState(initialState);

  //The SignIn is not working fully yet.
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
  return (
    <form className="signPage-form">
      <Paper elevation={10} className={classes.PapersStyle}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className="signPage-grid-container"
        >
          <Grid alignItems="center" item sm={6} xs={12}>
            <div className="signPage-grid-item">
              <h2 className={classes.titleStyle}>Sign In</h2>

              {/* email */}
              <TextField
                className={classes.textFieldStyle}
                label="Email"
                placeholder="Enter Email"
                type="email"
                onChange={handleChanges}
                fullWidth
              />

              {/* password */}
              <TextField
                className={classes.textFieldStyle}
                label="Password"
                placeholder="Enter Password"
                type="password"
                onChange={handleChanges}
                fullWidth
              />
            </div>
          </Grid>

          <Grid alignItems="center" item sm={6} xs={12}>
            <div className="signPage-grid-item">
              <Button
                className={classes.ButtonStyle}
                type="submit"
                color="primary"
                variant="contained"
                onClick={submitSignUp}
                endIcon={<ArrowForwardIcon />}
              >
                Log In
              </Button>

              <label style={{ fontSize: "1.5rem" }}>
                Don't have an account?
                <Link to="/signup">
                  <span> Sign Up</span>
                </Link>
              </label>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
