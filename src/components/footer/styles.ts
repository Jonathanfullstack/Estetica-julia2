import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${(props) => props.theme.pink};
  padding: 4rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  color: ${(props) => props.theme.white};
  gap: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  gap: 0.8rem;

  span {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 2rem;
    align-items: center;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 2rem;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
      color: red;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    font-size: 2rem; /* Tamanho mais equilibrado para mobile */
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;
