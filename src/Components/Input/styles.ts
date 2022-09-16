import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialInput = withStyles(() => ({
  root: {
    "& input": {
      minWidth: (props) => props.width ?? "500px",
    },
  },
}))(TextField);
