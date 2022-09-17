import { FormControl } from "@mui/material";
import { MaterialInput } from "./styles";

function Input({ ...rest }) {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <MaterialInput {...rest} />
    </FormControl>
  );
}

export { Input };
