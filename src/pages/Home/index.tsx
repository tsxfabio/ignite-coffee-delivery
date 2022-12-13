import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard.index'
import { Titles } from '../../components/Titles/Titles.index'
import { Header } from './components/Header'
import { MainContainer } from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Titles title="Nossos cafés" />
        <div>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </MainContainer>
    </div>
  )
}
