import { HeaderContent } from '../../components/HeaderContent'
import { Card } from './components/Card'
import { Search } from './components/Search'

import { ListCards } from './styles'

export function Home() {
  return (
    <>
      <HeaderContent />
      <Search />
      <ListCards>
        <Card />
        <Card />
        <Card />
      </ListCards>
    </>
  )
}
