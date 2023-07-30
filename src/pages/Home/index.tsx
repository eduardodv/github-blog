import { HeaderContent } from '../../components/HeaderContent'
import { Card } from './components/Card'

import { ListCards } from './styles'

export function Home() {
  return (
    <>
      <HeaderContent />
      <ListCards>
        <Card />
        <Card />
        <Card />
      </ListCards>
    </>
  )
}
