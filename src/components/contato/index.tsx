import { ContainerContato, ContentContact } from "./styles";
import Modelo from "../../assets/cilios.jpg";
import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";

export function Contato() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function contact() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5519994045641&text&type=phone_number&app_absent=0"
    );
  }
  return (
    <ContainerContato>
      <ContentContact data-aos="fade-up">
        <h1>Entre em contato com a gente!</h1>
        <div>
          <AiOutlineInstagram size={20} />
          <a
            href="https://www.instagram.com/juliarosacaroline/"
            target="_blank"
          >
            Júlia Rosa | Estética Facial
          </a>
        </div>
        <div>
          <MdOutlineMail size={20} />
          <span>juliarcaroline@gmail.com</span>
        </div>
        <button onClick={contact}>AGENDE SEU HORARIO</button>
      </ContentContact>
      <Image data-aos="fade-up" src={Modelo} alt="modelo" width={300} />
    </ContainerContato>
  );
}
