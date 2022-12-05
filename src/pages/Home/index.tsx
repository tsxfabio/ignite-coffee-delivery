import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard.index'
import { Header } from './components/Header'
import { MainContainer, SubTitle } from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <SubTitle>Nossos cafés</SubTitle>
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
