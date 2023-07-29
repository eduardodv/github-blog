import { NavLink } from 'react-router-dom'
import { FooterContainer, LinkLabel } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <LinkLabel>
        Desenvolvido por
        <NavLink to="https://github.com/eduardodv" target="_blank">
          e.
        </NavLink>
      </LinkLabel>
      <LinkLabel>|</LinkLabel>
      <LinkLabel>
        Project by:
        <NavLink to="https://www.rocketseat.com.br/" target="_blank">
          Rocketseat
        </NavLink>
      </LinkLabel>
    </FooterContainer>
  )
}
