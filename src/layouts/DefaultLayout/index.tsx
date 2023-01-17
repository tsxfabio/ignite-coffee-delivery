import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header.index'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
