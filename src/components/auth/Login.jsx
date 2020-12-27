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
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
    link: {
        display: 'flex',
        justifyContent:'center',
  }
}));

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
                setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
                userService
                .login(email, password)
                .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.response.data, {
                    position: toast.POSITION.TOP_CENTER,
                    });
                });
            }}
          >
            Sign In
          </Button>
          <Grid container >
            <Grid item xs>
              <Link href="/register" variant="body2" className={classes.link}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}/>
    </Container>
    );
};

export default Login;