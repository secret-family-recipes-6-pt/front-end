import { Link, useHistory } from "react-router-dom";

import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//  change paper to cards component

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
    fontSize: "2rem",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <form className="signIn-form">
      <Paper elevation={10} className={classes.PapersStyle}>
        <Grid container justifyContent="space-around" alignItems="center" id="signIn-grid-container">
          <Grid className="signin-gric-item" alignItems="center" item sm={6} xs={12}>
            <div className="signIn-grid-item">
              <h2 className={classes.titleStyle}>Sign In</h2>

              {/* email */}
              <TextField className={classes.textFieldStyle} label="Email" placeholder="Enter Email" type="email" fullWidth />

              {/* password */}
              <TextField className={classes.textFieldStyle} label="Password" placeholder="Enter Password" type="password" fullWidth />
            </div>
          </Grid>

          <Grid className="signin-gric-item" alignItems="center" item sm={6} xs={12}>
            <div className="signIn-grid-item">
              <Button
                className={classes.ButtonStyle}
                type="submit"
                color="primary"
                variant="contained"
                onClick={() => {
                  history.push("/home");
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Log In
              </Button>

              <label style={{ fontSize: "1.5rem" }}>
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </label>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
/* 

<Grid>
      <Paper elevation={10} className={classes.PaperStyle}>
        <form className={classes.FormStyle}>
           left section of form 
          <div className={classes.leftSection}>
            
          </div>

          {/* right section of form 
          <div className={classes.leftSection}>
            {/* submit login information */
/*
            

            
          </div>
        </form>
      </Paper>
    </Grid>
*/
