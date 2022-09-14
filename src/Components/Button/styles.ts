import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

export const ContainedButtons = withStyles(() => ({
  root: {
    gap: "20px",
    border: "1px solid red",

    "& button": {
      minWidth: "300px",
      border: "1px solid red",
    },
  },
}))(Button);
