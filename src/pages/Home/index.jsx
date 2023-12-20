import { Container, Banner,Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card"
import bannerImg from "../../assets/pngegg 2.png"


export function Home() {
  return(
    <Container>
      <Header  />
      
      <main>
        <Banner>
          <img src={bannerImg} alt="" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>

        <Content >
          <Section title="Refeições">
              <Card />
              <Card />
              <Card />
          </Section>

          <Section title="Sobremesas">
              <Card />
              <Card />
              <Card />
          </Section>

          <Section title="Bebidas">
              <Card />
              <Card />
              <Card />
          </Section>
        </Content>
        
      </main>

      <Footer />
    </Container>
  )
}