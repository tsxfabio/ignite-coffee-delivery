import { HorizontalCard } from './CoffeeCardHorizontal.styles'

interface PropsCard {
  imageLink: string
  name: string
}

export function CoffeeCardHorizontal(props: PropsCard) {
  return (
    <div>
      <HorizontalCard>
        <div className="imageContainer">
          <img src={props.imageLink} />
        </div>
        <div>
          <span>{props.name}</span>
          <div>
            <input type="number" defaultValue="1" />
            <button>Remover</button>
          </div>
        </div>
        <div></div>
      </HorizontalCard>
    </div>
  )
}
