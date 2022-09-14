import { ContainedButtons } from "./styles";

interface IButton {}

function Button({}: IButton) {
  return <ContainedButtons variant="contained">Contained</ContainedButtons>;
}

export { Button };
