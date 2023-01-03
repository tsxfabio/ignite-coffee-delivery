import { useState } from 'react'
import {
  CoffeeCard,
  CoffeeProviders,
} from '../../components/CoffeeCard/CoffeeCard.index'
import { Titles } from '../../components/Titles/Titles.index'
import { Header } from './components/Header'
import { MainContainer } from './styles'

export function Home() {
  const [coffees, setCoffees] = useState([
    {
      id: 1,
      img: '/src/assets/CoffeeTypes/ExpressocoffeeIcon.png',
      name: 'Expresso Tradicional',
      tags: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.99,
    },
  ])

  return (
    <div>
      <Header />
      <MainContainer>
        <Titles title="Nossos cafés" />
        <div>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                img={coffee.img}
                name={coffee.name}
                tags={coffee.tags}
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
