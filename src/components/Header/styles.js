import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 1.75rem 1.5rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  grid-area: "header";

  > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;

    svg {
      margin-left: 6rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    /* input {
      height: 3rem;
      width: 100%;

      padding: 12px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: transparent;
      border: none;


      &:placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    } */
  }


  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    position: relative;
      
    border: none;
    border-radius: 5px;

    svg {
      font-size: 2rem;
    }

    span {
      background-color: ${({ theme }) => theme.COLORS.RED_200};
      border-radius: 50%;
      position: absolute;
      padding: 1px 6px;
      font-size: 0.87rem;

      top: -4px;
      right: -5.54px;
    }
  }

  /* > a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  } */
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;
  width: 100%;

  
  font-family: 'Roboto', sans-serif;

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};

  }

  > h1 {
    font-weight: 700;
    font-size: 1.32rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 0.75rem;
  }
`