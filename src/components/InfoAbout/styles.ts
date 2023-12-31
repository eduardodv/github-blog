import { styled } from 'styled-components'

export const InfoAboutContainer = styled.div<{ $isHome: boolean }>`
  display: flex;
  gap: 0.7rem 1.5rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 575px) {
    justify-content: ${(props) => props.$isHome && 'center'};
  }
`

export const Item = styled.span<{ $isHome: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) =>
    props.$isHome
      ? props.theme.colors['base-subtitle']
      : props.theme.colors['base-span']};

  svg {
    max-width: 1.125rem;
    color: ${(props) => props.theme.colors['base-label']};
  }

  /* &:first-letter {
    text-transform: uppercase;
  } */
`
