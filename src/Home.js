import React from "react";
import { Form } from "./components/Form";

import { makeStyles, Box } from "@material-ui/core"
import xtrategieLogo from "./assets/images/logo_xtrategie.png"

const useMakes = makeStyles((theme) => ({
  root:{
    background: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  box:{
    background: theme.background.paper,
    width: "70vw",
    minWidth: "300px",
    height: "65vh", 
    borderRadius: "8px",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.7) "
  },
  subTitle: { 
    fontSize: "18px",
    textAlign: "center",

  }
}))

export function Home(){
  const classes = useMakes();
  return(
    <div className={classes.root}>
      <Box className={classes.box} display="flex" alignItems="center" maxWidth="sm" justifyContent="space-around" flexWrap="wrap">
        <img src={xtrategieLogo} width="280px" alt="imagem logo da xtrategie"/>
        <Box>
          <p className={classes.subTitle}>Faça seu login</p>
          <Form/>
        </Box>
      </Box>
    </div>
  )
}