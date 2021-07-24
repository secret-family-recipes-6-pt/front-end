import { Link, useHistory } from "react-router-dom";

import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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

export default function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <form className="signPage-form">
      <Paper elevation={10} className={classes.PapersStyle}>
        <Grid container justifyContent="space-around" alignItems="center" className="signPage-grid-container">
          <Grid className="signPage-grid-item" alignItems="center" item sm={6} xs={12}>
            <h2 className={classes.titleStyle}>Sign Up</h2>

            {/* username */}
            <TextField className={classes.textFieldStyle} label="Username" placeholder="Enter Username" type="input" fullWidth />

            {/* email */}
            <TextField className={classes.textFieldStyle} label="Email" placeholder="Enter Email" type="email" fullWidth />

            {/* password */}
            <TextField className={classes.textFieldStyle} label="Password" placeholder="Enter Password" type="password" fullWidth />
          </Grid>

          <Grid className="signPage-grid-item" alignItems="center" item sm={6} xs={12}>
            <Button
              className={classes.ButtonStyle}
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => {
                history.push("/");
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Register
            </Button>

            <label style={{ fontSize: "1.5rem" }}>
              Already have an account?
              <Link to="/">
                <span> Sign In</span>
              </Link>
            </label>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
