import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  root: {
    minHeight: "100vh",

    "& .MuiTextField-root": {
      minWidth: "100%",
    },

    "& .css-13i4rnv-MuiGrid-root  ": {
      minWidth: "100%",
    },

    "& h1": {
      fontSize: "25px",
      marginTop: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
    },

    "& h6": {
      fontSize: "15px",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
    },

    "& button": {
      minWidth: "100%",
    },
  },
}))(Grid);
