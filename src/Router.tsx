import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header.index'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Carrinho } from './pages/Carrinho/carrinho.index'
import { DetalhesDaCompra } from './pages/DetalhesDaCompra/DetalhesDaCompra.index'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/carrinho"
          element={<Carrinho />}
        />
        <Route
          path="/detalhes-da-compra"
          element={<DetalhesDaCompra />}
        />
      </Route>
    </Routes>
  )
}
