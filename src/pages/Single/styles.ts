import { styled } from 'styled-components'

export const Content = styled.article`
  padding: 2.5rem 2rem;
  line-height: 1.6;

  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 575px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
