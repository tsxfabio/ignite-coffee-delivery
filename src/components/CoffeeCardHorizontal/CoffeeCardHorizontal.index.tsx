import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { itemOrderType, OrderCoffeeContext } from '../../contexts/CoffeeContext'
import { HorizontalCard } from './CoffeeCardHorizontal.styles'

interface PropsCard {
  img: string
  name: string
  valor: number
  quantidade: number
}

export function CoffeeCardHorizontal(props: PropsCard) {
  const { itemOrder, setItemOrder } = useContext(OrderCoffeeContext)

  function setDown(name: string) {
    const itemFind = itemOrder.find((item) => item.name === name)
    if (itemFind!.quantidade > 1) {
      const updatedObject: any = {
        ...itemFind,
        quantidade: itemFind!.quantidade - 1,
      }
      const updatedObjects = itemOrder.map((item) =>
        item.name === name ? updatedObject : item
      )
      setItemOrder(updatedObjects)
      console.log(updatedObjects)
    } else {
      alert('Caso queira remover o item, clique no botão "Remover')
    }
  }

  function setUp(name: string) {
    const itemFind = itemOrder.find((item) => item.name === name)
    if (itemFind!.quantidade < 20) {
      const updatedObject: any = {
        ...itemFind,
        quantidade: itemFind!.quantidade + 1,
      }
      const updatedObjects = itemOrder.map((item) =>
        item.name === name ? updatedObject : item
      )
      setItemOrder(updatedObjects)
      console.log(updatedObjects)
    } else {
      alert('Não é possível adicionar mais de 20 itens')
    }
  }

  return (
    <div>
      <HorizontalCard>
        <div className="imageContainer">
          <img src={props.img} />
        </div>
        <div className="quantidadeContainer">
          <span>{props.name}</span>
          <div>
            <div className="inputContainer">
              <Minus
                size={16}
                className="operatorIcons"
                onClick={() => setDown(props.name)}
              />
              <input
                type="number"
                value={props.quantidade}
                onChange={() => console.log('change')}
              />
              <Plus
                size={16}
                className="operatorIcons"
                onClick={() => setUp(props.name)}
              />
            </div>
            <button>
              <Trash size={16} className="trashIcon" />
              Remover
            </button>
          </div>
        </div>
        <div>
          {props.valor.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </HorizontalCard>
    </div>
  )
}
