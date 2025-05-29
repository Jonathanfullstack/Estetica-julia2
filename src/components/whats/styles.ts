import styled from "styled-components";

export const Container = styled.div`
  // Seus estilos para o Container
`;

export const Content = styled.div`
  // Seus estilos para o Content
`;

export const Cards = styled.div`
  // Seus estilos para o Cards
`;

export const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25d366; // Cor do WhatsApp
  border-radius: 50%;
  width: 60px; // Largura do botão
  height: 60px; // Altura do botão
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  a {
    color: white;
    font-size: 30px; // Tamanho do ícone
    text-decoration: none;
  }
`;
