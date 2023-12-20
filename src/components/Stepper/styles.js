import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  font-size: 1.25rem;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    font-weight: 1.5rem;
  }
`