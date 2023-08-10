import { useEffect, useState } from 'react'

import { HeaderContent } from '../../components/HeaderContent'
import { Card } from './components/Card'
import { Search } from './components/Search'

import { ErrorMessage, ListCards } from './styles'

import { api } from '../../lib/axios'

import { PostsDataProps } from '../../interfaces/interfaces'

const username = import.meta.env.VITE_USERNAME
const repo = import.meta.env.VITE_REPO

export function Home() {
  const [postsData, setPostsData] = useState<PostsDataProps[]>([])

  const totalPosts = postsData.length

  async function fetchPosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=type:issue%20${query}%20repo:${username}/${repo}`,
    )

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
        {postsData.map((post) => {
          return (
            <Card
              key={post.id}
              url={post.number}
              title={post.title}
              description={post.body}
              createdAt={post.created_at}
            />
          )
        })}
      </ListCards>
      {postsData.length < 1 && (
        <ErrorMessage>Nenhum post encontrado!</ErrorMessage>
      )}
    </>
  )
}
