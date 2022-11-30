import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Header />} />
      </Route>
    </Routes>
  )
}
