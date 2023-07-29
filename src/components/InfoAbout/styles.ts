import { styled } from 'styled-components'

export const InfoAboutContainer = styled.div`
  display: flex;
  gap: 0.7rem 1.5rem;
  flex-wrap: wrap;
`

export const Item = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors['base-subtitle']};

  svg {
    max-width: 1.125rem;
    color: ${(props) => props.theme.colors['base-label']};
  }
`
