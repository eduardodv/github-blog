import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkItemContainer = styled(Link)`
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.theme.sizes['text-xs']};
  color: ${(props) => props.theme.colors['blue-500']};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 1px;
    transition: all 0.4s ease;
    background-color: ${(props) => props.theme.colors['blue-500']};
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`
