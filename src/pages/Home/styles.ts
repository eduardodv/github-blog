import { styled } from 'styled-components'

export const ListCards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
