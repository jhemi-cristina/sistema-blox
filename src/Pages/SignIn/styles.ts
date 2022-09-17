import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  root: {
    minHeight: "100vh",
    color: "#969696",

    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& h1": {
      fontSize: "30px",
    },
    "& h6": {
      fontSize: "15px",
    },

    "& button": {
      padding: "6px 80px",
    },
  },
}))(Grid);
