import { ReactNode } from "react";
import { ContainedButtons } from "./styles";

interface IButton {
  title?: string;
  rest: ReactNode;
}

function Button({ title, ...rest }: IButton) {
  return (
    <ContainedButtons variant="contained" {...rest}>
      {title}
    </ContainedButtons>
  );
}

export { Button };
