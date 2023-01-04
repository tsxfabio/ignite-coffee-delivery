import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CardContainer } from './CoffeeCard.styles'

export interface CoffeeProviders {
  id?: number
  name: string
  img: string
  tags: Array<any>
  description: string
  price: number
}

export function CoffeeCard(props: CoffeeProviders) {
  return (
    <CardContainer>
      <div className="card-elements">
        <img src={props.img} width="120px" height="120px" />
        <span className="tags">
          {props.tags.map((tag) => {
            return (
              <span key={tag} className="tags-i">
                {tag}
              </span>
            )
          })}
        </span>
        <h3>{props.name}</h3>
        <span className="description">{props.description}</span>
        <div className="info-buy">
          <span>{props.price}</span>
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
