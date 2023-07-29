import { Outlet } from 'react-router-dom'

import { Main } from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
