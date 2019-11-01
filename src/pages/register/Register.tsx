import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import Message from '../../components/message/Message';
import { validateEmail, validatePass, validateName } from '../../utils/Validators';
import { registerRequest } from '../../utils/FetchData';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Register.css';

const SignUp : React.FC = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errFN, setErrFN] = useState(false);
const [errLN, setErrLN] = useState(false);
const [errEmail, setErrEmail] = useState(false);
const [errPass, setErrPass] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/login" } };

const displayError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
        setErrorMessage("");
    }, 5000);
  }
  const handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();

    if (!validateName(firstName)) { setErrFN(true); }
    if (lastName === "") { setErrLN(true); }
    if (email === "") { setErrEmail(true); }
    if (password === "") { setErrPass(true); }

    if(firstName !== "" && lastName !== "" && email !== "" && password !== ""){      
      if (!errFN && !errLN && !errEmail && ! errPass){

        const userInfo = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
        
        registerRequest(userInfo)
        .then(res => {
          if (res.data.message === "User created !"){
            history.replace(from);
          }else{
            console.log(res.data);
            displayError("Something went wrong! Try again!")
          }
        })
        .catch(err => {
          displayError(err.message);
        })
      }else{
        displayError("Your email or password are invalid!");
      }
    }else{
      displayError("You have to fill out all of the fields!");
    }
  }
  const handleChange = (e: React.FormEvent<any>) => {
    const { name, value } = e.currentTarget;

    switch(name){
      case "firstName":
        setFirstName(value);
        if (!validateName(value)){
          setErrFN(true);
        }else{
          setErrFN(false);
        }
        break;
      case "lastName":
        setLastName(value);
        if (!validateName(value)){
          setErrLN(true);
        }else{
          setErrLN(false);
        }
        break;
      case "email":
        setEmail(value);
        if (!validateEmail(value)){
          setErrEmail(true);
        }else{
          setErrEmail(false);
        }
        break;
      case "password":
        setPassword(value);
        if (!validatePass(value)){
          setErrPass(true);
        }else{
          setErrPass(false);
        }
        break;
    }
  } 

  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar" style={{ backgroundColor: "#e91e63" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                error={errFN}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={errLN}
                value={lastName}
                onChange={handleChange}
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
                error={errEmail}
                value={email}
                onChange={handleChange}
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
                error={errPass}
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label= "I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{ margin: "15px 0 20px 0"}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <Link to="/login" className="link">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>

    <Container component="main" maxWidth="sm">
      <Box mt={6}>
        { errorMessage !== "" ? 
          (<Message message={errorMessage} variant="error"/>) : null
        }
      </Box>
    </Container>
    </>
  );
}

export default SignUp;