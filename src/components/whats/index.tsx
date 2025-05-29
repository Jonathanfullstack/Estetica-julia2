import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppButtonContainer } from "./styles";

export function WhatsAppButton() {
  return (
    <WhatsAppButtonContainer>
      <a
        href="https://wa.me/5519994045641?text=Oi! 👋 Eu vi sobre os serviços de cílios no seu site e estou interessada em agendar um horário. Quais são os horarios disponíveis? 😍 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </WhatsAppButtonContainer>
  );
}
