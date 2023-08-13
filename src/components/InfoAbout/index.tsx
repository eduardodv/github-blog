import { useLocation } from 'react-router-dom'
import { InfoAboutContainer, Item } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faComment,
  faBookBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostDataProps, UserDataProps } from '../../interfaces/interfaces'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface InfoAboutProps {
  userData: UserDataProps
  postData?: PostDataProps
}

export function InfoAbout({ userData, postData }: InfoAboutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <InfoAboutContainer $isHome={isHome}>
      <Item $isHome={isHome}>
        <FontAwesomeIcon icon={faGithub} />
        {isHome ? userData.login : postData && postData.user.login}
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
            <FontAwesomeIcon icon={faBookBookmark} />
            {userData.public_repos}{' '}
            {userData.public_repos === 1 ? 'repositório' : 'repositórios '}
          </Item>
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
            {postData &&
              postData.created_at &&
              formatDistanceToNow(new Date(postData && postData.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </Item>
          <Item $isHome={isHome}>
            <FontAwesomeIcon icon={faComment} />
            {postData && postData.comments}{' '}
            {postData && postData.comments !== 1 ? 'comentários' : 'comentário'}
          </Item>
        </>
      )}
    </InfoAboutContainer>
  )
}
