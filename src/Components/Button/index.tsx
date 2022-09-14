import { ContainedButtons } from "./styles";

interface IButton {
  title?: string;
}

function Button({ title }: IButton) {
  return <ContainedButtons variant="contained">{title}</ContainedButtons>;
}

export { Button };
