import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'

import { HeaderContent } from '../../components/HeaderContent'
import { Tags } from '../../components/Tags'

import { api } from '../../lib/axios'
import { Content } from './styles'

import { PostDataProps } from '../../interfaces/interfaces'

const username = import.meta.env.VITE_USERNAME
const repo = import.meta.env.VITE_REPO

const initialPostData: PostDataProps = {
  body: '',
  title: '',
  created_at: '',
  comments: 0,
  user: {
    login: '',
  },
  html_url: '',
  labels: [],
}

export function Single() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [postData, setPostData] = useState<PostDataProps>(initialPostData)

  useEffect(() => {
    document.title = 'Github Blog | ' + postData.title
    return () => {
      document.title = 'Github Blog'
    }
  }, [postData])

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(
          `/repos/${username}/${repo}/issues/${id}`,
        )

        if (response.data.state === 'closed') {
          setPostData(response.data)
        } else {
          navigate('/notfound', { replace: true })
        }
      } catch (error) {
        console.log(error)
        navigate('/notfound', { replace: true })
      }
    }

    fetchPost()
  }, [id, navigate])

  return (
    <>
      <HeaderContent postData={postData} />
      <Content>
        {(postData.body && (
          <ReactMarkdown linkTarget="_blank">{postData.body}</ReactMarkdown>
        )) || (
          <>
            <Skeleton width="100%" />
            <Skeleton width="90%" />
            <Skeleton width="70%" />
            <br />
            <Skeleton width="100%" />
            <Skeleton width="90%" />
            <Skeleton width="70%" />
            <br />
            <Skeleton width="100%" />
            <Skeleton width="90%" />
            <Skeleton width="70%" />
          </>
        )}
        <Tags tags={postData.labels} />
      </Content>
    </>
  )
}
