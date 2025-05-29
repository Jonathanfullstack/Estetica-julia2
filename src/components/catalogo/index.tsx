import Brasileiro from '../catalogo/Volume_brasileiro.jpeg'
import brown from '../catalogo/Volume_brown.jpeg'
import flower from '../catalogo/Volume_flower.jpeg'
import hibrido from '../catalogo/Volume_hibrido.jpeg'
import { CatalogContainer, Card, WhatsAppButton } from "./styles";

export function Catalog() {
  const items = [
    { title: "Volume Flower", price: "R$ 130,00", image: flower },
    { title: "Brasileiro Brown", price: "R$ 100,00", image: brown },
    { title: "Volume Brasileiro", price: "R$ 90,00", image: Brasileiro },
    { title: "Volume Hibrido", price: "R$ 100,00", image: hibrido },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Cílios</h1>
      <CatalogContainer>
        {items.map((item, index) => (
          <Card key={index}>
            <img src={item.image.src} alt={item.title} />
            <h2>{item.title}</h2>
            <span>{item.price}</span>
            <WhatsAppButton
              href={`https://wa.me/5519994045641?text=Oi! 👋 Eu vi sobre os serviços de cílios no seu site e estou interessada em agendar um horário. Quais são as opções disponíveis? 😍 "${item.title}"`}
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
