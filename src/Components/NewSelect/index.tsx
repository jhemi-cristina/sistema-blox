import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ContainedSelect } from "./styles";

interface INewSelect {
  label?: string;
  children?: Node;
}

function NewSelect({ label }: INewSelect) {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <ContainedSelect sx={{ maxWidth: "100%" }}>
      <FormControl variant="standard">
        <Box sx={{ maxWidth: "100%" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </ContainedSelect>
  );
}

export { NewSelect };
