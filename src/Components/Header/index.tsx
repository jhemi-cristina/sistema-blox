import { Typography } from "@mui/material";
import { ContainerHeader } from "./styles";
interface IHeader {
  title?: string;
}

function Header({ title }: IHeader) {
  return (
    <ContainerHeader>
      <Typography>Gerenciar unidades Curriculares</Typography>
    </ContainerHeader>
  );
}

export { Header };
