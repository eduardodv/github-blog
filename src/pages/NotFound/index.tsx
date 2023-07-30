import { NotFoundContainer, Title } from './styles'
import { LinkItem } from '../../components/LinkItem'

export function NotFound() {
  return (
    <NotFoundContainer>
      <Title>
        <strong>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </strong>
        <p>Página não encontrada</p>
      </Title>
      <LinkItem link="/" text="Voltar para a página inicial" iconType="undo" />
    </NotFoundContainer>
  )
}
