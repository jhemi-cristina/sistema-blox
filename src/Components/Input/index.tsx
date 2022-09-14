import { InputHTMLAttributes } from "react";
import { MaterialInput } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  props?: Node;
  form?: any;
  icon?: boolean;
  endAdornment?: any;
  values?: string;
  variant?: any;
  InputLabelProps?: any;
}

function Input({ label, variant, InputLabelProps, ...props }: IInput) {
  return (
    <MaterialInput
      label={label}
      variant={variant}
      InputLabelProps={InputLabelProps}
      {...props}
    />
  );
}

export { Input };
