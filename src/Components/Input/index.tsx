import { FormControl } from "@mui/material";
import { MaterialInput } from "./styles";

export function Input({ ...rest }) {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <MaterialInput {...rest} />
    </FormControl>
  );
}
