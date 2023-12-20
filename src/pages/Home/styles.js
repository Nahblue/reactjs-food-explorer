import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  flex-direction: column;

  > main {
    overflow-y: auto;
  }
`

export const Banner = styled.div`
  display: flex;
  position: relative;

  margin: 2.75rem 1rem 3.87rem 2.25rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > img {
    width: 11.93rem;
    height: 9.31rem;
    position: absolute;

    bottom: 0;
    left: -30px;
  }

  > div {
    background: linear-gradient(to bottom, #091e26, #00131c);
    border-radius: 2.92px;

    width: 100%;
    height: 7.5rem;

    padding: 2.25rem 0.5rem 1.37rem 9.56rem;

    h1 {
      font-size: 1.12rem;
      font-weight: 600;
    }

    p {
      font-size: 0.75rem;
    }
  }
`

export const Content = styled.div`


`
