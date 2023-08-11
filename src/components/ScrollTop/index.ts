import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
