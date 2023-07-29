import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.sizes['text-md']};
  padding: 0.7rem 1rem;
  background-color: ${(props) => props.theme.colors['base-profile']};

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
`

export const LinkLabel = styled.p`
  a {
    text-decoration: none;
    font-weight: bold;
    margin-left: 0.3125rem;
    color: ${(props) => props.theme.colors['blue-500']};
    transition: all 0.2s ease;

    &:focus {
      border-radius: 4px;
    }

    &:hover {
      color: ${(props) => props.theme.colors['blue-600']};
    }
  }

  @media (max-width: 400px) {
    &:nth-child(2) {
      display: none;
    }
  }
`
