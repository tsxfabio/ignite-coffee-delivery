import { Minus, Plus, Trash } from 'phosphor-react'
import { HorizontalCard } from './CoffeeCardHorizontal.styles'

interface PropsCard {
  imageLink: string
  name: string
  valor: number
}

export function CoffeeCardHorizontal(props: PropsCard) {
  return (
    <div>
      <HorizontalCard>
        <div className="imageContainer">
          <img src={props.imageLink} />
        </div>
        <div className="quantidadeContainer">
          <span>{props.name}</span>
          <div>
            <div className="inputContainer">
              <Minus size={16} className="operatorIcons" />
              <input type="number" defaultValue="1" />
              <Plus size={16} className="operatorIcons" />
            </div>
            <button>
              <Trash size={16} className="trashIcon" />
              Remover
            </button>
          </div>
        </div>
        <div>R$ {props.valor}</div>
      </HorizontalCard>
    </div>
  )
}
