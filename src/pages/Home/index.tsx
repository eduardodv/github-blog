import { useEffect, useState } from 'react'

import { HeaderContent } from '../../components/HeaderContent'
import { Card } from './components/Card'
import { Search } from './components/Search'

import { ErrorMessage, ListCards } from './styles'

import { api } from '../../lib/axios'

import { PostsDataProps } from '../../interfaces/interfaces'

import Skeleton from 'react-loading-skeleton'

const username = import.meta.env.VITE_USERNAME
const repo = import.meta.env.VITE_REPO

export function Home() {
  const [postsData, setPostsData] = useState<PostsDataProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const totalPosts = postsData.length

  async function fetchPosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=type:issue%20is:closed%20${query}%20repo:${username}/${repo}`,
    )

    setIsLoading(false)
    setPostsData(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <HeaderContent />
      <Search totalPosts={totalPosts} fetchPosts={fetchPosts} />
      <ListCards>
        {isLoading ? (
          <>
            <Skeleton height={245} borderRadius={10} />
            <Skeleton height={245} borderRadius={10} />
            <Skeleton height={245} borderRadius={10} />
            <Skeleton height={245} borderRadius={10} />
          </>
        ) : (
          postsData.map((post) => {
            return (
              <Card
                key={post.id}
                url={post.number}
                title={post.title}
                description={post.body}
                createdAt={post.created_at}
              />
            )
          })
        )}
      </ListCards>
      {!isLoading && totalPosts < 1 && (
        <ErrorMessage>Nenhum post encontrado!</ErrorMessage>
      )}
    </>
  )
}
