import { Minus, Plus, ShoppingCart, Target } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { OrderCoffeeContext } from '../../contexts/CoffeeContext'
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
  const { itemOrder, handleInputOrderSubmit } = useContext(OrderCoffeeContext)
  const [value, setValue] = useState<number>(1)

  useEffect(() => {
    console.log(itemOrder)
  }, [value, itemOrder])

  function setUp() {
    setValue(value)
    if (value < 99) {
      setValue((value) => value + 1)
    }
  }

  function setDown() {}

  function imprime(name: string, quantidade: number, price: number) {
    handleInputOrderSubmit(name, quantidade, price)
    console.log(itemOrder)
  }

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
            <Minus
              size={12}
              className="operatorIcons"
              type="button"
              onClick={setDown}
            />
            <input
              type="number"
              max={99}
              min={1}
              className="inputQuantidade"
              value={value}
              onChange={(e) => console.log(e.target.value)}
            />
            <Plus
              size={12}
              className="operatorIcons"
              type="button"
              onClick={setUp}
            />
          </div>
          <div className="cartIcons">
            <ShoppingCart
              size={22}
              weight="fill"
              id="shoppingCart"
              onClick={() => imprime(props.name, value, props.price)}
            />
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
