// styles.ts
import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 4px 12px rgba(32, 30, 30, 0.08);
  text-align: center;
  padding: 1rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    max-width: 160px;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #333;
  }

  span {
    font-weight: bold;
    font-size: 1rem;
    color:rgb(7, 7, 7);
    display: block;
    margin-bottom: 0.75rem;
  }
`;

export const WhatsAppButton = styled.a`
  display: inline-block;
  background-color:rgb(223, 21, 145);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color:rgb(188, 30, 127);
  }
`;
