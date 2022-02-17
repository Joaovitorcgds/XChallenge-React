import React from 'react';

import { ThemeProvider } from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'
import { Home } from './Home';


function App() {
  // const user = useSelector(selectUser)
  const theme = createTheme({
    palette:{
      primary:{
        main: '#3bc5b0'
      },
      secondary:{
        main: "#a4bbdd"
      }
    },
    background:{
      default: "#43464b",
      paper: "#ffffff"
      
    }
  }) 

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
