import { useEffect, useState } from 'react'
import { HeaderContent } from '../../components/HeaderContent'
import { api } from '../../lib/axios'
import { Content } from './styles'

import ReactMarkdown from 'react-markdown'

import { PostDataProps } from '../../interfaces/interfaces'
import { useNavigate, useParams } from 'react-router-dom'

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
}

export function Single() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [postData, setPostData] = useState<PostDataProps>(initialPostData)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(
          `/repos/${username}/${repo}/issues/${id}`,
        )

        setPostData(response.data)
      } catch (error) {
        console.log(error)
        navigate('/post', { replace: true })
      }
    }

    fetchPost()
  }, [id, navigate])

  return (
    <>
      <HeaderContent postData={postData} />
      <Content>
        <ReactMarkdown>{postData.body}</ReactMarkdown>
      </Content>
    </>
  )
}
