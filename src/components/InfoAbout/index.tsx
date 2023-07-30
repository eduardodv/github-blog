import { useLocation } from 'react-router-dom'
import { InfoAboutContainer, Item } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function InfoAbout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <InfoAboutContainer>
      <Item isHome={isHome}>
        <FontAwesomeIcon icon={faGithub} />
        eduardodv
      </Item>
      {isHome && (
        <>
          <Item isHome={isHome}>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </Item>
          <Item isHome={isHome}>
            <FontAwesomeIcon icon={faUserGroup} />3 seguidores
          </Item>
        </>
      )}
      {!isHome && (
        <>
          <Item isHome={isHome}>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </Item>
          <Item isHome={isHome}>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </Item>
        </>
      )}
    </InfoAboutContainer>
  )
}
