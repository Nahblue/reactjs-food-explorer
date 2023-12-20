import { Container } from "./styles";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export function Stepper() {
  return(
    <Container>
      <button>
        <FaPlus />
      </button>
      <span>01</span>
      <button>
        <FaMinus />
      </button>
    </Container>
  )
}