import Hero from "../../components/Hero/Hero";
import {
  AboutStyledContainer,
  ContactStyledContainer,
  HeroSeccionContainer,
  HomeContainer,
  ServicesStylesContainer,
  ModalContactoContainer,
} from "./Homestyled";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <HomeContainer>
      <HeroSeccionContainer>
        <Hero />
      </HeroSeccionContainer>
      <hr />
      <AboutStyledContainer>
        <h3>Sobre Nosotros</h3>

        <About />
      </AboutStyledContainer>
      <ServicesStylesContainer>
        <h3>Nuestros Servicios</h3>
        <Services />{" "}
      </ServicesStylesContainer>

      <ContactStyledContainer>
        <Contact />
      </ContactStyledContainer>
    </HomeContainer>
  );
};

export default Home;
