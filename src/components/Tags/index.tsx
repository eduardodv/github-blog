import { TagsProps } from '../../interfaces/interfaces'

import { TagsContainer } from './styles'

export function Tags({ tags }: TagsProps) {
  return (
    <TagsContainer>
      {tags.map((tag) => {
        return <span key={tag.id}>{tag.name}</span>
      })}
    </TagsContainer>
  )
}
