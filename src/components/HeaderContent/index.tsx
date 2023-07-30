import {
  HeaderContentContainer,
  AuthorImage,
  Content,
  Description,
  Title,
  Links,
} from './styles'

import { useLocation } from 'react-router-dom'
import { InfoAbout } from '../InfoAbout'
import { LinkItem } from '../LinkItem'

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
          {!isHome && <LinkItem link="/" text="Voltar" iconType="back" />}
          <LinkItem
            link="https://github.com/eduardodv"
            text={isHome ? 'Github' : 'Ver no Github'}
            iconType="external"
          />
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
