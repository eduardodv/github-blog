import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  CardContainer,
  CreatedAt,
  Description,
  HeadCard,
  Title,
} from './styles'

import { CardProps } from '../../../../interfaces/interfaces'

export function Card({ title, url, createdAt, description }: CardProps) {
  function smallDescription() {
    const abstract = description.slice(0, 250) + '...'

    return abstract
  }

  return (
    <CardContainer to={`posts/${url}`}>
      <HeadCard>
        <Title>{title}</Title>
        <CreatedAt>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </CreatedAt>
      </HeadCard>
      <Description>
        <ReactMarkdown>{smallDescription()}</ReactMarkdown>
      </Description>
    </CardContainer>
  )
}
