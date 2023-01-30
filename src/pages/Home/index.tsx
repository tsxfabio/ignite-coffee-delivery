import { useContext } from 'react'
import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard.index'
import { Titles } from '../../components/Titles/Titles.index'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'
import { Header } from './components/Header/Header.index'
import { MainContainer } from './styles'

export function Home() {
  const { coffees } = useContext(OrderCoffeeContext)

  return (
    <div>
      <Header />
      <MainContainer>
        <Titles title="Nossos cafés" />
        <div>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                img={coffee.img}
                name={coffee.name}
                tags={coffee.tags.map((tag) => tag)}
                description={coffee.description}
                price={coffee.price}
              />
            )
          })}
        </div>
      </MainContainer>
    </div>
  )
}
