import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 1.5rem 1.73rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto', sans-serif;

  grid-area: "footer";

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 0.75rem;
  }
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
 
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  
  > svg {
    font-size: 1rem;
  }

  > h1 {
    font-weight: 700;
    font-size: 0.95rem;
  }
`