import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Carrinho } from './pages/Carrinho/carrinho.index'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Route>
    </Routes>
  )
}
