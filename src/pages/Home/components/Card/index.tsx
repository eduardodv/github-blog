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
  return (
    <CardContainer to={`post/${url}`}>
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
        <ReactMarkdown>{description}</ReactMarkdown>
      </Description>
    </CardContainer>
  )
}
