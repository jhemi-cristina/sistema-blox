import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",

    "& h1": {
      fontSize: "25px",
      fontWeight: 700,
    },
    "& h6": {
      fontSize: "15px",
      gap: "20px",
    },

    "& button": {
      webkitFlex: "0px!important",
      flex: "none",
      justifyContent: "flexStart!important",
      display: "flex",
    },

    "& .MuiBottomNavigation-root": {
      display: "flex",
      justifyContent: "flex-start",
    },
    "& select": {
      maxWidth: "100%",
      border: "2px solid red",
    },
  },
}))(Grid);
