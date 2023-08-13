import { styled } from 'styled-components'

export const Content = styled.article`
  padding: 2.5rem 2rem;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
    margin: 1rem 0;
  }

  ul,
  ol {
    margin-bottom: 1rem;
    margin-left: 1.8rem;
  }

  a {
    color: ${(props) => props.theme.colors['blue-500']};
    &:not(:hover) {
      text-decoration: none;
    }
  }

  hr {
    margin: 1.5rem 0;
    border-color: ${(props) => props.theme.colors['base-label']};
  }

  h1 {
    font-size: 1.9rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 575px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
