import { Container, Cards } from "./styles";

export function Section({ title, children }) {
  return(
    <Container>
      <h2>{title}</h2>

      <Cards>
        {children}
      </Cards>
    </Container>
  )
}