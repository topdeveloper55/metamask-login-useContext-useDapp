import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
//import CssBaseline from '@mui/material/CssBaseline';
//import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
//import { Container, Grid } from "@mui/material";
import MetaLogIn from "./login";
import Dashboard from "./dashboard";

const themeDark = createTheme({
  palette: {
    background: {
      default: "#05182b",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container fixed>
        <Grid container justifyContent="flex-end" >
          <MetaLogIn />
        </Grid>
        <Dashboard />
      </Container>
    </ThemeProvider>
  );
};

export default App;
