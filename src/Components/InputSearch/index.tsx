import { Box, FormControl } from "@mui/material";
import { MaterialInput } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export function InputSearch({ onClick, ...rest }: any) {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <Box>
        <MaterialInput {...rest} />
        <SearchIcon onClick={onClick} />
      </Box>
    </FormControl>
  );
}
