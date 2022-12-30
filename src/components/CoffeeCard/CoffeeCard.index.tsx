import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CardContainer } from './CoffeeCard.styles'

export function CoffeeCard() {
  return (
    <CardContainer>
      <div className="card-elements">
        <img
          src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80"
          width="120px"
          height="120px"
        />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <span>O tradicional café feito com água quente e grãos moídos</span>
        <div className="info-buy">
          <span>R$ 9,90</span>
          <div>
            <Minus size={12} className="operatorIcons" />
            <input type="number" placeholder="1" max={99} min={1} />
            <Plus size={12} className="operatorIcons" />
          </div>
          <div className="cartIcons">
            <ShoppingCart size={22} weight="fill" id="shoppingCart" />
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
