import { CardHeader } from "@mui/material";
import { withStyles } from "@mui/styles";

export const ContainerHeader = withStyles(() => ({
  root: {
    gridArea: "header",
    height: "85px",
    width: "100%",
    color: "#ffff",
    backgroundColor: "#608afc",
    borderRadius: "0!important",
  },
}))(CardHeader);
