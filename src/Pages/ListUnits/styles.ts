import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& h1": {
      fontSize: "30px",
    },
    "& h6": {
      fontSize: "15px",
      gap: "20px",
    },

    "& button": {},
  },
}))(Grid);
