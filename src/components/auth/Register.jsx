import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button,Grid,Link,Checkbox,Container,Typography,CssBaseline,Avatar,FormControlLabel,Box } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {
const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                onChange={(e) => {
                setName(e.target.value);
            }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                setEmail(e.target.value);
            }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                setPassword(e.target.value);
            }}
              />
            </Grid>
              <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
                userService
                .register(name, email, password)
                .then((data) => {
                    console.log(data);
                    props.history.push("/login");
                    toast.success("Registration Successful", {
                    position: toast.POSITION.TOP_CENTER
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.response.data, {
                    position: toast.POSITION.TOP_CENTER,
                    });
                });
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
        <Box mt={2}>
      </Box>
    </Container>
    );
};

export default Register;