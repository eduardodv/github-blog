import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  LightBottom,
  LightElipseLeft,
  LightElipseRight,
  Logo,
  LogoImage,
  LogoText,
  ShapeLeft,
  ShapeRight,
} from './styles'

import LogoPart1 from '../../assets/logo-part1.svg'
import LogoPart2 from '../../assets/logo-part2.svg'

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContainer>
      <Logo to="/">
        <LogoImage>
          <img src={LogoPart1} alt="" />
          <img src={LogoPart2} alt="" />
        </LogoImage>
        <LogoText>
          {isHome ? <h1>GITHUB BLOG</h1> : <h2>GITHUB BLOG</h2>}
        </LogoText>
      </Logo>
      <ShapeLeft />
      <ShapeRight />
      <LightElipseLeft />
      <LightElipseRight />
      <LightBottom />
    </HeaderContainer>
  )
}
