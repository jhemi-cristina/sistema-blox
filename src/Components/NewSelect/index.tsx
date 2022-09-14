import { Select } from "@mui/material";
import { ContainedSelect } from "./styles";

interface INewSelect {
  label?: string;
  children?: Node;
}

function NewSelect({ label }: INewSelect) {
  return (
    <ContainedSelect variant="standard">
      <Select>{label}</Select>
    </ContainedSelect>
  );
}

export { NewSelect };
