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
