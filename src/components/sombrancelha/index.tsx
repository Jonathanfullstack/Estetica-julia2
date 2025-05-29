import Lamination from '../sombrancelha/brow_lamination.jpeg'
import henna from '../sombrancelha/com_henna.jpeg'
import normal from '../sombrancelha/sombra_normal.jpeg'

import { CatalogContainer, Card, WhatsAppButton } from "./styles";

export function Sombrancelha() {
  const items = [
    { title: "Brown Lamination", price: "R$ 100,00", image: Lamination },
    { title: "Henna Design", price: "R$ 35,00", image: henna },
    { title: "Designer personalizado", price: "R$ 25,00", image: normal },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Sombrancelhas</h1>
      <CatalogContainer>
        {items.map((item, index) => (
          <Card key={index}>
            <img src={item.image.src} alt={item.title} />
            <h2>{item.title}</h2>
            <span>{item.price}</span>
            <WhatsAppButton
              href={`https://wa.me/5519994045641?text=Oi! 👋 Eu vi sobre os serviços de Sombrancelha no seu site e estou interessada em agendar um horário. Quais são as opções disponíveis? 😍 "${item.title}"`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </Card>
        ))}
      </CatalogContainer>
    </>
  );
}
