import { Container } from "./styles";

import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import { Stepper } from "../Stepper"
import { Button } from "../Button"
import image from "../../assets/image 1.png"

export function Card({ isAdmin }) {

  return(
    <Container>
      {
        isAdmin ? <PiPencilSimple /> :  <FiHeart />
      }

      <img src={image} alt="prato" />
      <h2>Torradas de Parma &gt; </h2>
      <span>R$ 25,97</span>

      {
        !isAdmin &&
        <div>
          <Stepper />
          <Button title="incluir" />
        </div>
      }
      
    </Container>
  )
}