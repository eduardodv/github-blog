import {
  CardContainer,
  CreatedAt,
  Description,
  HeadCard,
  Title,
} from './styles'

export function Card() {
  return (
    <CardContainer to="/">
      <HeadCard>
        <Title>JavaScript data types and data structures</Title>
        <CreatedAt>Há 1 dia</CreatedAt>
      </HeadCard>
      <Description>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </Description>
    </CardContainer>
  )
}
