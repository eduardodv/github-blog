import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Single } from './pages/Single'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
      </Route>
    </Routes>
  )
}
