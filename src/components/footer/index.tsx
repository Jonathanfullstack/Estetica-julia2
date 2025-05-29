import { ContainerFooter, IconsContainer, ContentFooter } from "./styles";
import { AiOutlineInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <h1>Julia Rosa</h1>
        <span>2024 - Julia</span>
        <p>Todos direitos reservados</p>
      </ContentFooter>
      <IconsContainer>
        <a href="https://www.instagram.com/juliarosacaroline/" target="_blank">
          <AiOutlineInstagram />
        </a>
      </IconsContainer>
    </ContainerFooter>
  );
}
