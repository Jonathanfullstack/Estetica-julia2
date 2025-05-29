import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { MenuMobile } from "../components/header/menuMobile";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContainerBoasVindas,
  ContainerHome,
  ContainerImage,
  SectionNumbers,
  Container,
  Number,
  Divider,
} from "../styles/home/styles";
import { defaultTheme } from "../styles/themes/default";

import Image from "next/image";
import Modelo from "../assets/julia-1.jpg";
import { Servicos } from "../components/serviços";
import { MyContext } from "../components/context/MyContext";
import { Sobre } from "../components/sobre";
import { Contato } from "../components/contato";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whats";
import { Catalog } from "../components/catalogo";
import { Sombrancelha } from "../components/sombrancelha";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [open, setOpen] = useState(false);

  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5519994045641&text&type=phone_number&app_absent=0"
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <MyContext.Provider value={{ open, setOpen }}>
        <Container id="Inicio" data-aos="fade-up">
          <ContainerHome>
            <ContainerBoasVindas>
              <span>BOAS-VINDAS 👋</span>
              <h1>O cuidado que você merece</h1>
              <p>
                Tratamentos personalizados, cuidadosamente adaptados às suas
                necessidades, com total dedicação para garantir resultados
                excepcionais!
              </p>
            </ContainerBoasVindas>

            <ContainerImage>
              <Image src={Modelo} alt="modelo" width={450} />
            </ContainerImage>
          </ContainerHome>

          <SectionNumbers>
            <div>
              <Number>+300</Number>
              <span>Clientes atendidos</span>
              <Divider />
            </div>
            <div>
              <Number>+5</Number>
              <span>Tratamentos disponíveis</span>
              <Divider />
            </div>
            <div>
              <Number>+2</Number>
              <span>Anos na área da beleza</span>
            </div>
          </SectionNumbers>
        </Container>
        <Servicos />
        <Sobre />
        <Catalog />
        <Sombrancelha />
        <Contato />
        <Footer />
        <WhatsAppButton />
      </MyContext.Provider>
    </ThemeProvider>
  );
}
