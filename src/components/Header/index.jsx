import { Container, Logo } from "./styles";

import { PiReceipt } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { BsFillHexagonFill } from "react-icons/bs";

export function Header({ isAdmin }) {
  return(
    <Container>  
      <button>
        <FiMenu />
      </button>

      <Logo>
        <BsFillHexagonFill />
        <h1>food explorer</h1>

        {
          isAdmin &&
          <span>
            admin
          </span>
        }

      </Logo>

      {/* <div>
        <FiSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </div> */}


      {
        !isAdmin &&
        <button>
          <PiReceipt />
          <span>0</span>
        </button>
      }

      {/* <a href="#">
        <RxExit />
      </a> */}
    </Container>
  )
}