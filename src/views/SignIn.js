import { Link, useHistory } from "react-router-dom";
import { Grid, Paper, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   FormStyle: {
//     display: "flex",
//     justifyContent: "space-around",
//     height: "100%",
//     flexDirection: "row",
//   },

//   leftSection: {
//     width: "45%",
//   },

//   rightSection: {
//     width: "45%",
//   },

//   titleStyle: {
//     fontSize: "4rem",
//   },

//   PaperStyle: {
//     padding: "30px",
//     height: "70vh",
//     width: "80%",
//     margin: "5% auto",
//   },
// });

const useStyles = makeStyles((theme) => ({
  FormStyle: {
    // display: "flex",
    // justifyContent: "space-around",
    // height: "100%",
    // flexDirection: "column",
    // alignItems: "center",
  },

  leftSection: {
    // width: "45%",
  },

  rightSection: {
    // width: "45%",
  },

  titleStyle: {
    fontSize: "4rem",
  },

  PaperStyle: {
    // padding: "30px",
    // height: "70vh",
    // width: "80%",
    // margin: "5% auto",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Grid>
      <Paper elevation={10} className={classes.PaperStyle}>
        <form className={classes.FormStyle}>
          {/* left section of form */}
          <div className={classes.leftSection}>
            <h2 className={classes.titleStyle}>Sign In</h2>

            {/* email */}
            <TextField label="Email" placeholder="Enter Email" type="email" />

            {/* password */}
            <TextField label="Password" placeholder="Enter Password" type="password" />
          </div>

          {/* right section of form */}
          <div className={classes.leftSection}>
            {/* submit login information */}
            <Button
              className={classes.ButtonStyle}
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => {
                history.push("/home");
              }}
            >
              Sign In
            </Button>

            <Typography>
              {" "}
              Don't have an account?
              <Link to="/signup"> Sign Up</Link>
            </Typography>
          </div>
        </form>
      </Paper>
    </Grid>
  );
}
