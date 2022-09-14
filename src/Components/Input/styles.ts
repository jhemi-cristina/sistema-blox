import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialInput = withStyles(() => ({
  root: {
    "& input": {
      minWidth: "300px",
    },
  },
}))(TextField);
