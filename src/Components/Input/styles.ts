import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialInput = withStyles(() => ({
  root: {
    "& input": {
      width: "100%!important",
    },
  },
}))(TextField);
