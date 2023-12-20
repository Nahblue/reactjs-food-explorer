import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px; 

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Poppins', sans-serif;

    -webkit-font-smoothing: antialiased;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.87rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  } 

  a:hover {
    filter: brightness(0.9);
  }

  button:hover {
    filter: brightness(1.5);
  }

  ::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_400}
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_400}
  }
`;
