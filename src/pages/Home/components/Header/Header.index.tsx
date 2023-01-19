import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="titleAndDescriptionHeader">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <div className="iconAndDescriptionHeader">
          <div className="list1th">
            <div className="listContainer">
              <ShoppingCart size={22} weight="fill" className="cartIcon" />
              <span>Compra simples e segura</span>
            </div>
            <div className="listContainer">
              <Timer size={22} weight="fill" className="timerIcon" />
              <span>Embalagem mantém o café intacto</span>
            </div>
          </div>
          <div className="list2th">
            <div className="listContainer">
              <Package size={22} weight="fill" className="packageIcon" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="listContainer">
              <Coffee size={22} weight="fill" className="coffeeIcon" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarImage">
        <img src="/src/assets/imagem-header.png" />
      </div>
    </HeaderContainer>
  )
}
