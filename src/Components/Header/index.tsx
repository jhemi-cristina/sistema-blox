import { ContainerHeader } from "./styles";
interface IHeader {
  title?: string;
}

function Header({ title }: IHeader) {
  return <ContainerHeader>{title} </ContainerHeader>;
}

export { Header };
