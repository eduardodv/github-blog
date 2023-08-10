import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  HeaderContentContainer,
  AuthorImage,
  Content,
  Description,
  Title,
  Links,
} from './styles'

import { InfoAbout } from '../InfoAbout'
import { LinkItem } from '../LinkItem'

import { api } from '../../lib/axios'

import { PostProps, UserDataProps } from '../../interfaces/interfaces'

const username = import.meta.env.VITE_USERNAME

const initialUserData: UserDataProps = {
  avatar_url: '',
  login: '',
  name: '',
  bio: '',
  company: '',
  followers: 0,
  public_repos: 0,
}

export function HeaderContent({ postData }: PostProps) {
  const [userData, setUserData] = useState<UserDataProps>(initialUserData)

  async function fetchUserData() {
    const response = await api.get(`/users/${username}`, {})

    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContentContainer>
      {isHome && (
        <AuthorImage>
          <img src={userData.avatar_url} alt="" />
        </AuthorImage>
      )}
      <Content>
        <Links $isHome={isHome}>
          {!isHome && <LinkItem link="/" text="Voltar" iconType="back" />}
          <LinkItem
            link={
              isHome
                ? `https://github.com/${userData.login}`
                : postData && postData.html_url
            }
            text={isHome ? 'Github' : 'Ver no Github'}
            iconType="external"
            newTab
          />
        </Links>
        <Title $isHome={isHome}>
          {isHome ? userData.name : postData && postData.title}
        </Title>
        {isHome && <Description>{userData.bio}</Description>}
        <InfoAbout userData={userData} postData={postData} />
      </Content>
    </HeaderContentContainer>
  )
}
