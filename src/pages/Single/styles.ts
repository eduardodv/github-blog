import { styled } from 'styled-components'

export const Content = styled.article`
  padding: 2.5rem 2rem;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 1rem 0;
  }

  ul,
  ol {
    margin-left: 1.8rem;
  }

  a {
    color: ${(props) => props.theme.colors['blue-500']};
    &:not(:hover) {
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 575px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
