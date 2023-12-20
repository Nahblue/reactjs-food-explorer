import styled from "styled-components";

export const Container = styled.section`
  padding-left: 1.5rem;

  > h2 {
    margin-bottom: 1.5rem;
    font-size: 1.12rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`