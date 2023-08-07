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

export const ErrorMessage = styled.section`
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes['title-lg']};
`
