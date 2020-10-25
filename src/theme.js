import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#32a852",
    },
    secondary: {
      main: "#ff0000",
    },
},
typography:{
    button: {
      textTransform: "none",
      fontSize:"18px"
    }  
},
});

export default theme;
