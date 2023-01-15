import { Minus, Plus, Trash } from 'phosphor-react'
import { HorizontalCard } from './CoffeeCardHorizontal.styles'

interface PropsCard {
  img: string
  name: string
  valor: number
  quantidade: number
}

export function CoffeeCardHorizontal(props: PropsCard) {
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
              <Minus size={16} className="operatorIcons" />
              <input
                type="number"
                value={props.quantidade}
                onChange={() => console.log('change')}
              />
              <Plus size={16} className="operatorIcons" />
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
