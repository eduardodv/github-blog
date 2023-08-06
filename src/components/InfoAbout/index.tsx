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

import { UserDataProps } from '../../interfaces/interfaces'

interface InfoAboutProps {
  userData: UserDataProps
}

export function InfoAbout({ userData }: InfoAboutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <InfoAboutContainer>
      <Item $isHome={isHome}>
        <FontAwesomeIcon icon={faGithub} />
        {isHome ? userData.login : 'user issue'}
      </Item>
      {isHome && (
        <>
          {userData.company && (
            <Item $isHome={isHome}>
              <FontAwesomeIcon icon={faBuilding} />
              {userData.company}
            </Item>
          )}

          <Item $isHome={isHome}>
            <FontAwesomeIcon icon={faUserGroup} />
            {userData.followers}{' '}
            {userData.followers === 1 ? 'seguidor' : 'seguidores '}
          </Item>
        </>
      )}
      {!isHome && (
        <>
          <Item $isHome={isHome}>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </Item>
          <Item $isHome={isHome}>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </Item>
        </>
      )}
    </InfoAboutContainer>
  )
}
