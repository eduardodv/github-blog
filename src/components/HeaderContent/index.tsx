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

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const username = import.meta.env.VITE_USERNAME

const initialUserData: UserDataProps = {
  avatar_url: '',
  login: '',
  name: '',
  bio: '',
  company: '',
  followers: 0,
  public_repos: 0,
  html_url: '',
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
          {(userData.avatar_url && (
            <img src={userData.avatar_url} alt="" />
          )) || <Skeleton height="100%" />}
        </AuthorImage>
      )}
      <Content $isHome={isHome}>
        <Links $isHome={isHome}>
          {!isHome && <LinkItem link="/" text="Voltar" iconType="back" />}
          {(userData.login.length > 0 && (
            <LinkItem
              link={isHome ? userData.html_url : postData && postData.html_url}
              text={isHome ? 'Github' : 'Ver no Github'}
              iconType="external"
              newTab
            />
          )) || <Skeleton width={120} />}
        </Links>
        <Title $isHome={isHome}>
          {isHome ? (
            <h2>{userData.name || <Skeleton width="60%" />}</h2>
          ) : (
            <h1>{(postData && postData.title) || <Skeleton width="80%" />}</h1>
          )}
        </Title>
        {isHome && (
          <Description>{userData.bio || <Skeleton width="40%" />}</Description>
        )}

        {(userData.login.length > 0 && (
          <InfoAbout userData={userData} postData={postData} />
        )) || <Skeleton width="40%" />}
      </Content>
    </HeaderContentContainer>
  )
}
