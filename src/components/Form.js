import React, { useState } from "react";
import  { useDispatch } from "react-redux"
import { login } from "../features/useSlice";

import { Grid, makeStyles, Button } from "@material-ui/core";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    boxShadow: "0 0 0",
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '28ch',
  }
}));


export function Form(){
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dispatch(login({
        email: values.email,
        password: values.password
      }))
    )
  
    setValues({email: "", password: "", showPassword: false})
  }

  return (
    <div className={classes.root}>
      <form onSubmit={e => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item>
            <FormControl className={clsx(classes.margin, classes.textField)} required>
              <InputLabel htmlFor="standard-email">Email</InputLabel>
              <Input
                id="standard-email"
                type="email"
                fullWidth 
                onChange={handleChange("email")}
                value={values.email}/>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <FormControl className={clsx(classes.margin, classes.textField)} required>
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={3}>
          <Grid item className={clsx(classes.margin)}>
            <Button variant="outlined" color="primary" type="submit">Entrar</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}