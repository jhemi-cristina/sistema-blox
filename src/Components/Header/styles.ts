import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const ContainerHeader = withStyles(() => ({
  root: {
    gridArea: "header",
    height: "85px",
    width: "100%",
    color: "#ffff",
    backgroundColor: "#608afc",

    "& title": {
      margin: "10px",
    },
  },
}))(Grid);
