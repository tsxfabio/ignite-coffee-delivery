import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './CoffeeCard.styles'

export function CoffeeCard() {
  return (
    <CardContainer>
      <div className="card-elements">
        <img
          src="https://source.unsplash.com/random/"
          width="120px"
          height="120px"
        />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <span>O tradicional café feito com água quente e grãos moídos</span>
        <div className="info-buy">
          <span>R$ 9,90</span>
          <input type="number" placeholder="1" />
          <ShoppingCart size={22} weight="fill" />
        </div>
      </div>
    </CardContainer>
  )
}
