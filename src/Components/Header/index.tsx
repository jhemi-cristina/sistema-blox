import { ContainerHeader } from "./styles";

interface IHeader {
  title?: string;
  link?: string;
}

function Header({ title, link }: IHeader) {
  return <ContainerHeader>Testeeee</ContainerHeader>;
}

export { Header };
