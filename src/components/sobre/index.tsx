import { ContentSobre } from "./styles";
import { ContainerSobre } from "./styles";
import Image from "next/image";
import Modelo from "../../assets/espaco.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Sobre() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerSobre>
      <ContentSobre>
        <Image data-aos="fade-up" src={Modelo} alt="modelo" width={470} />
        <section id="Sobre" data-aos="fade-up">
          <span>SOBRE NÓS</span>
          <h1>Entenda quem somos e por que existimos</h1>
          <p>
            Olá, meu nome é Júlia, e sou apaixonada pela área de estética. Meu
            propósito é realçar a beleza natural de cada olhar, renovando a
            autoestima e devolvendo a confiança de minhas clientes. Desde cedo,
            busquei um propósito que unisse minha paixão e habilidade, e
            encontrei minha verdadeira vocação no mundo da estética. <br></br>{" "}
            <br></br>Acredito que cada mulher possui uma beleza única e
            especial, e meu trabalho é destacá-la de forma personalizada e
            cuidadosa. Estou comprometida em oferecer experiências que vão além
            da estética, proporcionando um impacto positivo na autoestima e na
            confiança de cada pessoa que confia em meus serviços.<br></br>{" "}
            <br></br> Estou empolgada para compartilhar essa jornada com vocês,
            ajudando cada uma a se sentir ainda mais bonita e confiante!
          </p>
        </section>
      </ContentSobre>
    </ContainerSobre>
  );
}
