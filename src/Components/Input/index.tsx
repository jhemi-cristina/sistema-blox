import { InputHTMLAttributes } from "react";
import { MaterialInput } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  props?: Node;
  form?: any;
  icon?: boolean;
  endAdornment?: any;
  values?: string;
}

function Input({ label }: IInput) {
  return <MaterialInput label={label} variant="standard" />;
}

export { Input };
