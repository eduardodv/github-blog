export interface UserDataProps {
  login: string
  avatar_url: string
  name: string
  bio: string
  company: string
  followers: number
  public_repos: number
}

export interface PostsDataProps {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  state: string
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
}

export interface PostProps {
  postData?: PostDataProps
}

export interface CardProps {
  title: string
  url: number
  createdAt: string
  description: string
}

export interface SearchProps {
  totalPosts: number
  fetchPosts: (query?: string) => Promise<void>
}
