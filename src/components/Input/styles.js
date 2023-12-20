import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  margin-bottom: 2rem;
  border-radius: 8px;

  > input {
    height: 3rem;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`