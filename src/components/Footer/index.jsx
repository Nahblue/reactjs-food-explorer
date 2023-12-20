import { Container, Logo } from "./styles";

import { FaRegCopyright } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

export function Footer() {
  return(
    <Container>
      <Logo>
        <BsFillHexagonFill />
        <h1>food explorer</h1>
      </Logo>

      <p>
        <FaRegCopyright />
        2023 - Todos os direitos reservados.
      </p>
    </Container>
  )
}