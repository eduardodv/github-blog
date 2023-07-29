import { keyframes, styled } from 'styled-components'

import ShapeLeftImage from '../../assets/header-shape-left.svg'
import ShapeRightImage from '../../assets/header-shape-right.svg'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 8.375rem;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors['base-profile']};
`

const blink = keyframes`
  to {
  visibility: hidden;
  }
`

export const Logo = styled(Link)`
  position: relative;
  z-index: 2;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`

export const LogoImage = styled.div`
  img:last-child {
    animation: ${blink} 1.5s steps(10, start) infinite;
  }
`

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

export const LogoText = styled.div`
  h1,
  h2 {
    font-family: 'Coda';
    letter-spacing: 0.5px;
    margin-top: 1.25rem;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-size: ${(props) => props.theme.sizes['title-lg']};
    color: ${(props) => props.theme.colors['blue-500']};
    animation: ${typing} 1.2s steps(27, end);
  }
`

const slideShapeLeft = keyframes`
  from { left: -10vw }
  to { left: 0 }
`

export const ShapeLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 38px;
  width: 29vw;
  height: 188px;
  z-index: 1;
  background: url(${ShapeLeftImage}) left top no-repeat;
  background-size: 100% 100%;
  animation: ${slideShapeLeft} 0.8s ease-in-out;
`

const slideShapeRight = keyframes`
  from { right: -15vw }
  to { right: 0 }
`

export const ShapeRight = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  bottom: 30px;
  width: 26vw;
  z-index: 1;
  background: url(${ShapeRightImage}) right top no-repeat;
  background-size: 100% 100%;
  animation-delay: 2s;
  animation: ${slideShapeRight} 1.1s ease-in-out;
`
export const LightBottom = styled.div`
  position: absolute;
  bottom: 10px;
  width: 62vw;
  height: 52px;
  filter: blur(200px);
  background-color: ${(props) => props.theme.colors['blue-600']};
`

export const LightElipseLeft = styled.div`
  position: absolute;
  top: -96px;
  left: -130px;
  width: 236px;
  height: 236px;
  border-radius: 50%;
  filter: blur(400px);
  background-color: ${(props) => props.theme.colors['blue-600']};
`

export const LightElipseRight = styled.div`
  position: absolute;
  top: -40px;
  right: 10px;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  filter: blur(368px);
  background-color: ${(props) => props.theme.colors['blue-600']};
`
