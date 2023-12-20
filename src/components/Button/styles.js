import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;

  width: 100%;
`