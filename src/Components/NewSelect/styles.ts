import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";

export const ContainedSelect = withStyles(() => ({
  root: {
    border: "2px solid red",

    "& select": {
      maxWidth: "100%",
      border: "2px solid red",
    },
  },
}))(Box);
