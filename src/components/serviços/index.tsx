import { GoCheck } from "react-icons/go";
import { Container, Content, Cards } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Servicos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container id="Serviços">
      <Content data-aos="fade-up">
        <span>SERVIÇOS</span>
        <h1>Como podemos ajudá-lo a se sentir melhor?</h1>
      </Content>
      <Cards data-aos="fade-up">
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Volume Híbrido</h1>
          <p>
            Quer um olhar que combine o melhor do clássico com um toque de
            glamour? O volume híbrido é perfeito para quem busca um efeito
            natural com um toque extra de sofisticação. Combinando fios
            clássicos e de volume, criamos um olhar deslumbrante, com densidade
            na medida certa, que valoriza sua beleza natural sem exageros.
            Experimente o volume híbrido e sinta a diferença!
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Volume Brasileiro</h1>
          <p>
            Se você ama um visual marcante e cheio de personalidade, o volume
            brasileiro é a escolha ideal! Essa técnica utiliza leques de cílios
            ultrafinos para garantir um efeito super volumoso e dramático,
            destacando ainda mais o seu olhar. Para aquelas que não abrem mão de
            cílios impactantes, o volume brasileiro é o segredo para um olhar
            irresistível e cheio de poder!
          </p>
        </div>

        <div data-aos="fade-up">
          <GoCheck />
          <h1>Volume Brown</h1>
          <p>
            Complete o seu visual com o Brasileiro Brow, a técnica perfeita para
            quem deseja sobrancelhas definidas e volumosas. Além de realçar o
            seu olhar, ele complementa perfeitamente os cílios volumosos,
            criando uma moldura harmoniosa para o rosto. Dê um up no seu visual
            e surpreenda com sobrancelhas bem definidas e cílios perfeitos!
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Brow Lamination</h1>
          <p>
            O Brow Lamination é um tratamento estético para as sobrancelhas que realinha e
            modela os fios, deixando-os mais definidos, uniformes e com aspecto de “penteados para cima”
            Esse procedimento valoriza o desenho natural das sobrancelhas, preenche falhas aparentes, dá mais volume
            e cria o efeito de sobrancelhas mais cheias, levantando o olhar de forma sutil e sofisticada.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Henna Design</h1>
          <p>
            Destaque seu olhar com o Henna Design, a técnica que une design personalizado e 
            aplicação de henna para sobrancelhas marcantes e bem preenchidas. Ideal para quem deseja definição
             com um toque de cor, garantindo um efeito duradouro e natural que valoriza sua expressão.
          </p>
        </div>
        <div data-aos="fade-up">
          <GoCheck />
          <h1>Designer personalizado</h1>
          <p>
            Realce sua beleza com o Natural Shape, o design de sobrancelhas perfeito para quem busca um 
            visual alinhado, leve e sem coloração. A técnica respeita o formato natural do seu rosto,
             garantindo sobrancelhas bem definidas e elegantes, com acabamento limpo e sofisticado.
          </p>
        </div>
      </Cards>
    </Container>
  );
}
