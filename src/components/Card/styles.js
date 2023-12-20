import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  width: 13.12rem;
  height: 18.25rem;

  position: relative;
  display: inline-block;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > img {
    height: 5.5rem;
    width: 5.5rem;
  }

  > h2 {
    font-weight: 500;
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  /* > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  } */

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`