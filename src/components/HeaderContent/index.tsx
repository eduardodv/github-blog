import {
  HeaderContentContainer,
  AuthorImage,
  Content,
  Description,
  Title,
  Links,
  LinkItem,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'

import { useLocation } from 'react-router-dom'
import { InfoAbout } from '../InfoAbout'

export function HeaderContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContentContainer>
      {isHome && (
        <AuthorImage>
          <img src="https://github.com/eduardodv.png" alt="" />
        </AuthorImage>
      )}
      <Content>
        <Links isHome={isHome}>
          {!isHome && (
            <LinkItem to="/">
              <FontAwesomeIcon icon={faAngleLeft} /> Voltar
            </LinkItem>
          )}
          <LinkItem to="https://github.com/eduardodv" target="_blank">
            {!isHome && 'Ver no'} Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </LinkItem>
        </Links>
        <Title isHome={isHome}>Eduardo Dalla Vecchia</Title>
        {isHome && (
          <Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Description>
        )}
        <InfoAbout />
      </Content>
    </HeaderContentContainer>
  )
}
