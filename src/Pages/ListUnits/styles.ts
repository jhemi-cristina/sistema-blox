import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  root: {
    "& h1": {
      fontSize: "25px",
      fontWeight: 700,
    },

    "& .Mui-selected": {
      color: "#ffff!important",
    },

    "& button": {
      padding: "6px 110px",
    },
  },
}))(Grid);
