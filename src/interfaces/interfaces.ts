export interface UserDataProps {
  login: string
  avatar_url: string
  name: string
  bio: string
  company: string
  followers: number
  public_repos: number
  html_url: string
}

export interface PostTagsProps {
  id: number
  name: string
}

export interface TagsProps {
  tags: PostTagsProps[]
}

export interface PostsDataProps {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  state: string
  labels: PostTagsProps[]
}

interface UserIssueDataProps {
  login: string
}

export interface PostDataProps {
  body: string
  title: string
  user: UserIssueDataProps
  comments: number
  created_at: string
  html_url: string
  labels: PostTagsProps[]
}

export interface PostProps {
  postData?: PostDataProps
}

export interface CardProps {
  title: string
  url: number
  createdAt: string
  description: string
  tags: PostTagsProps[]
}

export interface SearchProps {
  isLoading: boolean
  totalPosts: number
  fetchPosts: (query?: string) => Promise<void>
}
